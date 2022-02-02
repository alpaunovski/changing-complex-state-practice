import React, { useState } from "react";

function App() {
  // Declare a new state variable, which we'll call "contact". Contact is an object.
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // Declare a single function to handle the onChange event
  function handleChange(event) {

    // Destructure the event.target.name and event.target.value
    const { name, value } = event.target;

    //Every time we call setContact, it will create a new "contact" object. That's why we need to preserve the previous values of the object. Luckily, React saves the previous state of the object in the "contact" variable. We just need to call it using a prevValue variable. When we create new "contact" object, we set the fields of the new object that we don't want to change to the values of the previous object, which is saved in the "prevValue" variable.
    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }
    });
  }

  //This is where our App function is. We return a form with three input fields. For each of these fields, we sate an onChange event handler.
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
      <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName}/>
      <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName} />
      <input name="email" placeholder="Email" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
