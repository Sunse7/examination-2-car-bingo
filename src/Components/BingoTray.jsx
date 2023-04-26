import { useSelector } from 'react-redux';
import BingoCard from './BingoCard';

function BingoTray() {
    const state = useSelector((state) => state);

    let randomNumber = Math.floor(Math.random() * 27) // 16 randomnummer? som är deras id som sen renderas ut?
    console.log(randomNumber, 'random');

    return ( 
        <section>
            <h2>Bingo Tray</h2>
            <BingoCard />
        </section>
     );
}

export default BingoTray;