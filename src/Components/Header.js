import React from "react"

function Header() {
    return (
        <header>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
                className='header--image'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project</h4>
        </header>
    )
}

export default Header