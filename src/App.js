// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)

//     function toggle(id) {
//         setSquares(prevSquares => {
//             return prevSquares.map((square) => {
//                 return square.id === id ? { ...square, on: !square.on } : square
//             })
//         })
//     }


//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id}
//             // id={square.id} 
//             on={square.on} 
//             toggle={()=>toggle(square.id)}
//         />
//     ))

//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// Form Page

// import React from "react";
// export default function App() {
//     const [formData, setFormData] = React.useState(
//         {firstName: "", lastName: "",age:"0"}
//     )
//     console.log(formData)    
//     function handleChange(event) {
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]:event.target.value
//             }
//         })
//     }
//     return (
//         <form>
//             <input 
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//             /><br/><br/>
//             <input 
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//             /><br/><br/>
//             <input 
//                 type="number"
//                 placeholder="Enter Age"
//                 onChange={handleChange}
//                 name="age"
//             />
//         </form>
//     )
// }

// Button page

// import React from "react";
// import Button from "./Button/Button.react";
// export default function App() {
//     return (
//         <div>
//             <Button />
//         </div>
//     )
// }

// Sign up page

import React from "react"
export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}







