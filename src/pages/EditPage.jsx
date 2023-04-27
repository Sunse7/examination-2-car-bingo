import { useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";

function EditPage() {
    const navigate = useNavigate();

    return ( 
        <main>
            <h2>Redigera</h2>
            <BackButton action={()=> navigate(-1)} />
        </main>
     );
}

export default EditPage;