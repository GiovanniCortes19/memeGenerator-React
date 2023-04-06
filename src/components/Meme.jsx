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
                <input className="form-input" placeholder="Top text" type="text" />
                <input className="form-input" placeholder="Bottom text" type="text" />
                <button className="form-btn" onClick={getMemeImage} >Get a new meme image  🖼</button>
            </form>
            <img className="meme-img" src={meme.randomImage} alt="meme-img" />
        </main>
    )
}