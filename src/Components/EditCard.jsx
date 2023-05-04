import style from "./EditCard.module.scss";

function EditCard({ bingoItem, editAction, deleteAction, isVisible, handleChange }) {
  return (
    <article className={style.card}>
      { isVisible ?
        <input className={style.card__input} type="text" defaultValue={bingoItem.text} onChange={handleChange} /> :
        <p className={style.card__info}>{bingoItem.text} {bingoItem.id}</p>
      }
      <section className={style.card__iconContainer}>
        <img onClick={editAction} src="./images/icon-pencil.svg" alt="" />
        <img onClick={deleteAction} src="./images/icon-circle-x.svg" alt="" />
      </section>
    </article>
  );
}

export default EditCard;
