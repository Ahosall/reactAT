import { useEffect, useState } from "react";

const PageNotFound = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Whoops! Página não encontrada!...");
    }, 1000);
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default PageNotFound;
