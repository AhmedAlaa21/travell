import "./App.css";
import Hero from "./components/Hero/Hero";
import image from "../src/assets/travel-01.jpg";
import image_02 from "../src/assets/travel-02.jpg";
import image_03 from "../src/assets/travel-03.jpg";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={image} />
      <Slider
        imageSrc={image_02}
        title="Be an Explorer"
        subtitle={
          "Our platforms offers a wide of variety of unique travel locations!"
        }
        flipped={false}
      />
      <Slider
        imageSrc={image_03}
        title="Memories for a lifetime"
        subtitle={"Your Dream vacation is a few clicks away!"}
        flipped={true}
      />
    </div>
  );
}

export default App;
