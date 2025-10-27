import { Banner } from "../component";

const Home = () => {
  return (
    <section className="min-h-[90vh] pt-40">
      <div className="container">
        <div className="w-full h-[70vh] flex items-center">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Home;
