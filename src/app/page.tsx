import About from "@/components/about";
import Cocktails from "@/components/cocktails";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default Home;
