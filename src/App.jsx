import Hero from "./components/Hero/Hero";
import HomeCards from "./components/HomeCards/HomeCards";
import JobListings from "./components/jobListings/jobListings";
import NavBar from "./core/Navbar/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
};

export default App;
