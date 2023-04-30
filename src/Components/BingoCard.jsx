import { useState } from "react";
import style from "./BingoCard.module.scss";

function BingoCard({ bingoItem }) {
  const [isChecked, setIsChecked] = useState(false);
  function ToggleChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <article onClick={ToggleChecked} className={style.card}>
      <figure className={isChecked ? style.checkmark : null}></figure>
        <p className={style.card__info}>{bingoItem.text}</p>
    </article>
  );
}

export default BingoCard;
