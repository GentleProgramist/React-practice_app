import React, { Component } from 'react'
import FormComponent from "./FormComponent"

class Form extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
      isFriendly: false,
      gender: "",
      favColor: "red"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })
  }
  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
      />
    )
  }
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

export default Form