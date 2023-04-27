import style from './BingoCard.module.scss';

function BingoCard({bingoItem}) {
    return ( 
        <article className={style.card}>
            <p className={style.card__info}>{bingoItem.text}</p>
        </article>
     );
}

export default BingoCard;