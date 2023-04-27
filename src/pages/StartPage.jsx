import Button from '../Components/Button';
import BingoTray from '../Components/BingoTray';
import { useNavigate } from 'react-router-dom';

function StartPage() {
    const navigate = useNavigate();

    return ( 
        <main>
            <h2>Bil bingo</h2>
            <Button title='Ny bricka' isBlue={true} />
            <Button title='Redigera' action={() => navigate('/editpage')} isBlue={false} />
            <BingoTray />
        </main>
     );
}

export default StartPage;