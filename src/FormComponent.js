import React from "react"
function FormComponent(props) {

  return (
    <main>
      <form>
        <input
          type="text"
          value={props.data.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          value={props.data.age}
          name="age"
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <textarea
          value={"Some default value"}
          onChange={props.handleChange}
        />

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          /> Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          /> Female
        </label>
        <br />
        <label>Favorite Color:</label>
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="germany">Germany</option>
          <option value="norway">Norway</option>
          <option value="north pole">North Pole</option>
          <option value="south pole">South Pole</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            onChange={props.handleChange}
            checked={props.data.isVegan}
          /> Vegan?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isKosher"
            onChange={props.handleChange}
            checked={props.data.isKosher}
          /> Kosher?
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            onChange={props.handleChange}
            checked={props.data.isLactoseFree}
          /> Lactose Free?
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h1>Entered information:</h1>
      <h2>Your name: {props.data.firstName} {props.data.lastName}</h2>
      <h2>Your age: {props.data.age}</h2>
      <h2>Your gender: {props.data.gender}</h2>
      <h2>Your destination: {props.data.destination}</h2>
      <h2>Your dietary restrictions:</h2>

      <h2>Vegan: {props.data.isVegan ? "Yes" : "No"}</h2>
      <h2>Kosher: {props.data.isKosher ? "Yes" : "No"}</h2>
      <h2>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</h2>
    </main >
  )
}

//This is function component in same role.//

// import React, {useState} from 'react'
// function App(){
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   return(
//     <form>
//       <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
//       <br />
//       <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
//       <h1>{firstName} {lastName}</h1>
//     </form>
//   );
// }

export default FormComponent