import React, { useRef, useState } from "react";
import Buttons from "../UI/Buttons";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

  
  const [error, setError] = useState(); // error state management for conditional rendering ErrorModal component


  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty Values). ", // erroru object olarak tuttum ki ErrorModalda tanımlanan title ve message ı verebilsin.
      });
      // conditional submitting.
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age. ",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge); // func olarak execute ettik çünkü props olarak alınan şey bir func. App js de açıkladım , burda stateleri alınan bilgileri inputtan appjs e aktarmış oluyoruz. Lifting state management durumu
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
           key="error-modal"
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* state de tutulan error var ise burada error modal render ediyor yani conditional rendering işlemi bu olmuş oluyor. error olduktan sonra okeye basınca geri donmek için mutlaka error stateini güncellemek gerekir.*/}
      <Card key=" add-user-card" className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username </label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age"> Age </label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Buttons type="submit"> Add User Here </Buttons>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
