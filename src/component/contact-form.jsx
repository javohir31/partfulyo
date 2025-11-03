import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

// ✅ Validation Schema
const ContactSchema = z.object({
  firstName: z
    .string()
    .min(3, "Ismingiz kamida 3 ta belgidan iborat bo‘lishi kerak.")
    .max(30, "Ism 30 belgidan oshmasligi kerak."),
  phone: z
    .string()
    .min(10, "Telefon raqam noto‘g‘ri.")
    .max(20, "Telefon raqam juda uzun."),
  message: z
    .string()
    .min(5, "Xabar kamida 5 ta belgidan iborat bo‘lishi kerak.")
    .max(150, "Xabar 150 belgidan oshmasligi kerak."),
});

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const telegramApi = `https://api.telegram.org/bot${import.meta.env.VITE_BOT_TOKEN}/sendMessage`;

  const onSubmit = async (data) => {
    setIsSending(true);

    const text = `
👤 *Ism:* ${data.firstName}
📞 *Telefon:* ${data.phone}
💬 *Xabar:* ${data.message}
`;

    try {
      const response = await fetch(telegramApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) throw new Error("Telegram API error");

      alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Xabar yuborishda xatolik yuz berdi. Qayta urinib ko‘ring.");
    } finally {
      setIsSending(false);
    }
  };

  const phoneValue = watch("phone");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 bg-gray-50 p-5 rounded-lg"
    >
      {/* Name */}
      <label htmlFor="name" className="text-2xl font-normal">
        Ism
      </label>
      <input
        id="name"
        placeholder="Ismingizni kiriting"
        className="p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
        {...register("firstName")}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
      )}

      {/* Phone */}
      <label htmlFor="phone" className="text-2xl font-normal">
        Telefon
      </label>
      <PhoneInput
        id="phone"
        placeholder="Telefon raqamingizni kiriting"
        defaultCountry="UZ"
        value={phoneValue}
        onChange={(value) => setValue("phone", value || "")}
        className="p-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
      {errors.phone && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}

      {/* Message */}
      <label htmlFor="message" className="text-2xl font-normal">
        Xabar
      </label>
      <textarea
        id="message"
        placeholder="Xabaringizni kiriting"
        className="p-4 border border-slate-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-slate-500"
        rows={5}
        {...register("message")}
      ></textarea>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        className={`bg-slate-900 text-white py-4 rounded-lg hover:bg-slate-700 transition ${
          isSending ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {isSending ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </form>
  );
};

export default ContactForm;