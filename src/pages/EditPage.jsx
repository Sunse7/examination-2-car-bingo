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
import { useState } from "react";

function EditPage() {
  const state = useSelector((state) => state.bingoItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addTextVisible, setAddTextVisible] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [newBingoItemInput, setNewBingoItemInput] = useState();
  const [updateText, setUpdateText] = useState();

  function editText(item) {
    let match = state.find((list) => list.id === item.id);
    if (match.id === item.id) {
      setEditingItemId(item.id);
    }
  }

  function saveEditText(item) {
    let updatedItem = {
      id: item.id,
      text: updateText,
    };
    dispatch(updateBingoItem(updatedItem));
    setEditingItemId(null);
  }

  function addNewBingoItem() {
    let newItem = {
      text: newBingoItemInput,
      img: "",
    };
    dispatch(addBingoItem(newItem));
    setAddTextVisible(false);
  }

  return (
    <main className={style.main}>
      <section className={style.main__backButton}>
        <Button title="Tillbaka" action={() => navigate(-1)} isBlue={true} />
      </section>
      <h2 className={style.main__h2}>Redigera</h2>
      {addTextVisible ? (
        <>
          <input
            className={style.main__addNewInput}
            type="text"
            placeholder="Lägg till text, max 40 tecken"
            maxLength="40"
            onChange={(e) => setNewBingoItemInput(e.target.value)}
          />
          <Button title="Spara" action={addNewBingoItem} />
        </>
      ) : (
        <Button
          title="Lägg till ny"
          action={() => setAddTextVisible(true)}
          isBlue={true}
        />
      )}
      <section className={style.main__cardsContainer}>
        {state &&
          state.map((item, i) => (
            <EditCard
              bingoItem={item}
              editAction={() =>
                editingItemId === item.id ? saveEditText(item) : editText(item)
              }
              deleteAction={() => dispatch(deleteBingoItem(item))}
              isVisible={editingItemId === item.id}
              handleChange={(e) => setUpdateText(e.target.value)}
              key={i}
            />
          ))}
      </section>
    </main>
  );
}

export default EditPage;
