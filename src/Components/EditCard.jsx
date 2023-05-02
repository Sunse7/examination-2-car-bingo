import style from "./EditCard.module.scss";

function EditCard({ bingoItem, editAction, deleteAction }) {
  return (
    <article className={style.card}>
      <p className={style.card__info}>{bingoItem.text}</p>
      <section className={style.card__iconContainer}>
        <img onClick={editAction} src="./images/icon-pencil.svg" alt="" />
        <img onClick={deleteAction} src="./images/icon-circle-x.svg" alt="" />
      </section>
    </article>
  );
}

export default EditCard;
