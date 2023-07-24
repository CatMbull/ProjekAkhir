import Button from "../elements/Button/Button";
import Navbar from "../fragments/Navbar";

const HomePage = () => {
  return (
    <div className="h-screen bg-slate-950 overflow-hidden">
      <Navbar />
      <div>
        <img src="/images/home/header-img-2.png" className="bg-cover" />
        <div className="w-full h-full absolute top-0 bg-black opacity-50"></div>
        <div className="w-full h-full absolute top-0 flex">
          <div className="h-full w-3/4 flex items-center justify-center">
            <div className="text-white w-4/6">
              <h1 className="font-bold text-3xl mb-2">Lorem, ipsum dolor.</h1>
              <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae est tempore odio ad dolor quam repellendus dolore nostrum porro.</p>
              <Button className="mt-5 h-10 w-2/6 bg-orange-500 text-slate-100  text-xl rounded-md">Learn More</Button>
            </div>
          </div>
          <div className="h-full w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
