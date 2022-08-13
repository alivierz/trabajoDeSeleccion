import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { getOnepokemonByName } from '../../services/pokeapi';
import './pokeprofile.css'
const PokeProfile = () =>{
    const poke = useParams()


    //Estados
    const [name, setName] = useState('')
    const [image, setImg] = useState('')
    const [type, setType] = useState([])
    const [stats, setStats] = useState([])
    useEffect(() =>{
        getOnepokemonByName(poke.id).then((res)=>{
            setName(res.name)
            setImg(res.sprites.other["official-artwork"].front_default)
            setType(res.types)
            setStats(res.stats)
        }).catch((error) =>{
            console.log(error)
        })
    }, [poke])
    const tipos = type.map((value) => <p key={value.type.name}>{value.type.name}</p>)
    const statsProfile = stats.map((value) => <p key={value.stat.name}>{value.stat.name}: {value.base_stat}</p>)
    return(
        <div className="profile">
            <div className='profile-init'>
                <h2>{name}</h2>
                <img src={image} alt="" />
                <div className='tipos'>
                    {tipos}
                </div>
            </div>
            <div className='stats'>
                {statsProfile}
            </div>
        </div>
    )
}

export default PokeProfile