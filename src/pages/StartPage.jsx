import Button from '../Components/Button';
import BingoTray from '../Components/BingoTray';

function StartPage() {
    return ( 
        <main>
            <h2>StartPage</h2>
            <Button title='Ny bricka' />
            <Button title='Editera ' />
            <BingoTray />
        </main>
     );
}

export default StartPage;