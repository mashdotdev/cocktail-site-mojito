import About from "@/components/about";
import Art from "@/components/art";
import Cocktails from "@/components/cocktails";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
};

export default Home;
