import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

// UsersListe users olarak maplendiği için usersList stateini geçirmeye çalışıyoruz
// ki orada girilen userları listelicez.

// bunun içinde AddUser dan girilen bilgiler 2 arguman olarak almak gerek.
// bunu da addUserHandler içinde tanımladık. dic olarak da name ve age aldık previous state de ... ile ekledik.
// bu datayı şimdi AddUser içide props olarak datayı almak için geçmek gerek.
