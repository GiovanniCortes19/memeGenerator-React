import memesData from "./memesData"
import { useState } from "react"

export default function Meme(){
    // creating the State
    const [meme, setMeme] = useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form className="form" action="">
                <input 
                    className="form-input" 
                    placeholder="Top text" 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    
                    />
                <input 
                    className="form-input" 
                    placeholder="Bottom text" 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
    
                    />
                <button className="form-btn" onClick={getMemeImage} >Get a new meme image  🖼</button>
            </form>
            <div className="meme-container">
                <img className="meme-img" src={meme.randomImage} alt="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}