import Hero from "./components/Hero/Hero";
import HomeCards from "./components/HomeCards/HomeCards";
import NavBar from "./core/Navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
    </>
  );
};

export default App;
