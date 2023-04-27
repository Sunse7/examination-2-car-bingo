import { useSelector } from 'react-redux';
import BingoCard from './BingoCard';

function BingoTray() {
    const state = useSelector((state) => state.bingoItems);

    let randomNumber = Math.floor(Math.random() * state.length) // 16 randomnummer? som är deras id som sen renderas ut?
    console.log(randomNumber, 'random');
    
    return ( 
        <section>
            <h2>Bingo Tray</h2>
            <BingoCard />
        </section>
     );
}

export default BingoTray;