import memesData from "./memesData"

export default function Meme(){
    // creating the State
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    return (
        <main>
            <form className="form" action="">
                <input className="form-input" placeholder="Top text" type="text" />
                <input className="form-input" placeholder="Bottom text" type="text" />
                <button className="form-btn">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}