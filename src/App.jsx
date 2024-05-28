import { useState } from "react";
import Navbar from "./components/navbar";
import Routes from "./components/routes";
import Footer from "./components/footer";
import Search from "./components/search";
import { Link } from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <div className="flex items-center justify-center flex-col">
          <Link to={"/"}>
            <p className="text-[76px] tracking-widest font-bold text-blue-500 p-2 rounded dark:text-gray-100 font-mono">
              ZodGol
            </p>
          </Link>
          <Search />
        </div>
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
