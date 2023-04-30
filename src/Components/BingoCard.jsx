import style from "./BingoCard.module.scss";

function BingoCard({ bingoItem }) {
  return (
    <article className={style.card}>
      <figure className={style.checkmark}></figure>
        <p className={style.card__info}>{bingoItem.text}</p>
    </article>
  );
}

export default BingoCard;
