import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>

      <div className="w-full h-full relative image-background">
        <Navbar />
        <Hero />
        <Editor />
        <Footer />
      </div>
    </>
  );
}
