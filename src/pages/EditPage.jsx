import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Button from "../Components/Button";

function EditPage() {
    const navigate = useNavigate();

    return ( 
        <main>
            <h2>Redigera</h2>
            <BackButton action={()=> navigate(-1)} />
            <Button title='Lägg till ny' isBlue={true} />
        </main>
     );
}

export default EditPage;