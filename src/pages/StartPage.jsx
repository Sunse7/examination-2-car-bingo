import Button from '../Components/Button';
import BingoTray from '../Components/BingoTray';

function StartPage() {
    return ( 
        <main>
            <h2>Bil bingo</h2>
            <Button title='Ny bricka' />
            <Button title='Redigera ' />
            <BingoTray />
        </main>
     );
}

export default StartPage;