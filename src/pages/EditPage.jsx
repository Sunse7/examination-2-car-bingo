import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import style from "./EditPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import EditCard from "../Components/EditCard";
import {
  addBingoItem,
  deleteBingoItem,
  updateBingoItem,
} from "../app/bingoInfoSquaresSlice";

function EditPage() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.bingoItems);
  const dispatch = useDispatch();

  return (
    <main className={style.main}>
      <section className={style.main__backButton}>
        <Button title="Tillbaka" action={() => navigate(-1)} isBlue={true} />
      </section>
      <h2 className={style.main__h2}>Redigera</h2>
      <Button
        title="Lägg till ny"
        action={() => dispatch(addBingoItem("hej"))}
        isBlue={true}
      />
      <section className={style.main__cardsContainer}>
        {state &&
          state.map((item, i) => (
            <EditCard
              bingoItem={item}
              editAction={() => dispatch(updateBingoItem(item))}
              deleteAction={() => dispatch(deleteBingoItem(item))}
              key={i}
            />
          ))}
      </section>
    </main>
  );
}

export default EditPage;
