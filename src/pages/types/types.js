import { useState } from "react"
import { useEffect } from "react"
import { getAllTypes } from "../../services/pokeapi"
import { useDispatch } from 'react-redux/es/exports';
import { setType } from "../../redux/actions";
import './types.css'
const Types = () =>{
    //Estados
    const [arrTypes, setArrTypes] = useState([])
    //Estado global
    const dispatch = useDispatch()
    //Efectos
    useEffect(() =>{
        getAllTypes().then((res) =>{
            setArrTypes(res.results)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    const cambioTipo = (value) =>{
        dispatch(setType(value))
    }

    const arr = arrTypes.map((value) => <div key={value.name} className={value.name} onClick={() => cambioTipo(value.name)}><h6>{value.name}</h6></div>)
    return (
         
        <div>
            <h3 className="title">Select a type</h3>
            <div className="types-list">
                {arr}
            </div>
        </div>
    )
}
export default Types