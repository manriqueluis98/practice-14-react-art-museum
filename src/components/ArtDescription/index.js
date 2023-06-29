import { Link, useParams } from "react-router-dom/cjs/react-router-dom"

function ArtDescription({arts}){

    const {artId} = useParams()

    const currentArt = arts.find(art => art.id == artId)

    console.log(currentArt)
    return (
        <>
            <Link to="/">Home</Link>
            <h1>{currentArt.title}</h1>

            <a href={currentArt.url}>More info </a>

            <img className="art-img" src={currentArt.primaryimageurl}></img>
            <h3>{currentArt.labeltext}</h3>
        </>
    )
}

export default ArtDescription