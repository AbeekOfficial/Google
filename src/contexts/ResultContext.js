import { createContext, useContext, useState } from "react";

const ResultContext = createContext;
const baseUrl = "https://google-search74.p.rapidapi.com/";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}${type}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e44040c5f5msh4536aa04543e38ep1ab3b7jsn6210b8e96204",
          "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{ results, isLoading, searchTerm, setSearchTerm, getResults }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (context === undefined) {
    throw new Error(
      "useResultContext must be used within a ResultContextProvider"
    );
  }
  return context;
};

export default ResultContextProvider;
