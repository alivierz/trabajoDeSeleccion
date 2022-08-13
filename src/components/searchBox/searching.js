import { useState } from "react"
import {useNavigate} from 'react-router-dom';

import './search.css'
const Search = () => {

    const nav = useNavigate()

    const [text, setText] = useState('')

    const sending = (value) =>{
        const pokemon = text.trim().toLowerCase()
        if(value === "Enter"){
            nav(`/pokemon/${pokemon}`)
        }else{
            return
        }
    }

    return(
        <div className="search">
            <input type="text" onChange={(e) => setText(e.target.value)} onKeyUp={(e) => sending(e.code)}/>
        </div>
    )
}

export default Search