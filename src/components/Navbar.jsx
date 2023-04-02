import memeIcon from './meme.png'

export default function Navbar (){
    return (
        <nav className="navbar">
            <div className="nameLogo">
                <img className='logo-img' src={memeIcon} alt="meme-img" />
                <h1 className="logo-name">Meme Generator</h1>
            </div>
            <p>React Course: Project 3</p>
        </nav>
    )
}