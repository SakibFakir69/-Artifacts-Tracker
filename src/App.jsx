import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import useAuth from "./hooks/useAuth";
import Footer from "./Components/Footer";

function App() {
  const { darkmode } = useAuth();

  // Apply dark mode class to <html> globally
  // useEffect(() => {
  //   if (darkmode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("white");
  //   }
  // }, [darkmode]);
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
  

  return (
    <div className={`${darkmode ? "bg-white transition-all" : "bg-black transition-all"}`}>

      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="">
        
      </footer>
    </div>
  );
}

export default App;
