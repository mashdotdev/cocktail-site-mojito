import About from "@/components/about";
import Art from "@/components/art";
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
      <Art />
    </main>
  );
};

export default Home;
