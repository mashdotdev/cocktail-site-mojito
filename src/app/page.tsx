import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-screen"></div>
    </main>
  );
};

export default Home;
