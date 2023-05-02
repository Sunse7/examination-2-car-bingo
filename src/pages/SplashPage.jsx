import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from './SplashPage.module.scss';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/startpage");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={style.main}>
      <h1 className={style.main__h1}>Bil Bingo Time!</h1>
      <img className={style.main__image} src="./images/camper-van.png" alt="" />
    </main>
  );
}

export default SplashPage;
