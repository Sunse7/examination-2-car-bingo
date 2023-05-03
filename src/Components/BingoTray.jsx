import { useSelector } from 'react-redux';
import BingoCard from './BingoCard';
import style from './BingoTray.module.scss';

function BingoTray() {
    const state = useSelector((state) => state.bingoItems);
    let bingoItemsCopy = [...state];

    for (let i = bingoItemsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bingoItemsCopy[i], bingoItemsCopy[j]] = [bingoItemsCopy[j], bingoItemsCopy[i]];
    }

    return ( 
        <section className={style.container}>
            {
                 bingoItemsCopy && bingoItemsCopy.slice(0, 16).map((bingoItem) => <BingoCard key={bingoItem.id} bingoItem={bingoItem} />)
            }
        </section>
     );
}

export default BingoTray;