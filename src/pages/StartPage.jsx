import Button from "../Components/Button";
import BingoTray from "../Components/BingoTray";
import { useNavigate } from "react-router-dom";
import style from "./StartPage.module.scss";

function StartPage() {
  const navigate = useNavigate();

  return (
    <main className={style.wrapper}>
      <h2>Bil bingo</h2>
      <section className={style.wrapper__section}>
        <Button title="Ny bricka" isBlue={true} />
        <Button
          title="Redigera"
          action={() => navigate("/editpage")}
          isBlue={false}
        />
      </section>
      <BingoTray />
    </main>
  );
}

export default StartPage;
