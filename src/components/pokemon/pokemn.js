import { useState } from "react"
import { useEffect } from "react"
import { getOnePokemon } from "../../services/pokeapi"
import { Link } from "react-router-dom"
const Pokemon = ({url}) =>{
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    useEffect(() =>{
        getOnePokemon(url.url).then((res) =>{
            setImage(res.sprites.other["official-artwork"].front_default)
            setName(res.name)
        }).catch((error) =>{
            console.log(error)
        })
    }, [url])

    return (
        <Link to={`/pokemon/${name}`}>
            <img src={image} alt="" />
        </Link>
    )
}
export default Pokemon