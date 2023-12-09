import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Guarantees from "./components/guarantees/Guarantees";
import Testmonials from "./components/testmonials/Testmonials";
import { useEffect, useState } from "react";
import tiktokPixel from "tiktok-pixel";

function App() {
  useEffect(() => {
    // Initialize TikTok Pixel with your Pixel ID
    tiktokPixel.init("CLPPFB3C77U6SG2AL7M0");

    // Track a standard event (Replace 'ViewContent' with the actual event name)
    tiktokPixel.track("ViewContent", "ClickButton", "SubmitForm");
  }, []);
  const [activeLink, setActiveLink] = useState("HeaderId");

  const handleScroll = () => {
    const headerSection = document.getElementById("headerId");
    const infoSection = document.getElementById("infoId");
    const guaranteesSection = document.getElementById("guaranteesId");
    const testmonialsSection = document.getElementById("testmonialsId");
    const formSection = document.getElementById("order-form");

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (headerSection && scrollPosition < infoSection.offsetTop) {
      setActiveLink("headerId");
    } else if (infoSection && scrollPosition < guaranteesSection.offsetTop) {
      setActiveLink("infoId");
    } else if (
      guaranteesSection &&
      scrollPosition < testmonialsSection.offsetTop
    ) {
      setActiveLink("guaranteesId");
    } else if (testmonialsSection && scrollPosition < formSection.offsetTop) {
      setActiveLink("testmonialsId");
    } else if (formSection && scrollPosition >= formSection.offsetTop) {
      setActiveLink("order-form");
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once on mount
  return (
    <>
      <Header />
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      <Info />
      <Guarantees />
      <Testmonials />
      <Form />
      <Footer />
    </>
  );
}

export default App;
