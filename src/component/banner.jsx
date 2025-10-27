import { Link } from "react-router-dom";
import { bannerLinks } from "../data";
import profile_img from "../assets/azimjon.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col gap-8 w-1/2">
      <div className="flex items-start gap-8">
        <img
          src={profile_img}
          className="w-30 h-30 rounded-full overflow-hidden"
          alt=""
        />

        <div>
          <h1 className="text-4xl font-bold">Students Blog</h1>
          <p className="text-2xl text-gray-700 mt-4">Software engineer</p>
          <div className="mt-5 flex items-center gap-4">
            {bannerLinks.map((el) => (
              <a key={el.id} href={el.to} target="_blank">
                <img width={30} height={30} src={el.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-lg">
          I write about non-technical stuff in the technical world.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Link
          className="bg-blue-500 text-white uppercase py-2 px-4 rounded-sm text-base shadow-md shadow-gray-300 hover:bg-blue-400 transition-colors border-[1px] border-blue-500 font-bold"
          to={"/articles"}
        >
          Read blog
        </Link>
        <Link
          className="py-2 px-4 border-[1px] border-blue-500 uppercase text-base text-blue-500 rounded-sm font-bold hover:bg-gray-50 transition-colors"
          to={"/contact"}
        >
          About me
        </Link>
      </div>
    </div>
  );
};

export default Banner;
