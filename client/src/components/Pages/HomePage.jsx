import Navbar from "../fragments/Navbar";

const HomePage = () => {
  return (
    <div className="h-screen bg-slate-950 overflow-hidden">
      <Navbar />
      <img src="/images/home/header-img-2.png" className="bg-cover" />
      <div className="w-full h-full absolute top-0 bg-black opacity-50"></div>
    </div>
  );
};

export default HomePage;
