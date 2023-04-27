import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/startpage");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <h1>Bil Bingo Time!</h1>
      <img src="./images/camper-van.png" alt="" />
    </main>
  );
}

export default SplashPage;
