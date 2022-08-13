import { useState } from 'react';
import { useEffect } from 'react';
import { getAllpokemons, PokeTypes } from '../../services/pokeapi';
import Pokemon from '../../components/pokemon/pokemn';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setOffset } from '../../redux/actions/index';
import './home.css'
import Search from '../../components/searchBox/searching';


const Home = () =>{
      //! Estados
  const [pokemonsArray, setPokemonArray] = useState([])
  const [page, setPage] = useState(0)
  //dispatch
  const dispatch = useDispatch()
  const selector = useSelector(state => state.offset)
  const selectorType = useSelector(state => state.type)
  
  useEffect(() =>{
    if(selectorType === 'none'){
        getAllpokemons(selector)
        .then((res) =>{
        setPokemonArray(res.results)
        }).catch((error) =>{
        console.log(error)
        })
    }else{
        PokeTypes(selectorType).then((res) =>{
            setPokemonArray(res.pokemon)
        })
    }
  }, [selector, selectorType])

  //? cambio para la pagina de poemons por defecto
  const cambio = async (direction) =>{
        if(direction === 'next'){
            if(selector >= 0){
                dispatch(setOffset(selector + 9))
            }else{
                return
            }
        }else{
            if(selector > 0){
                dispatch(setOffset(selector - 9))
            }else{
                return
            }
        }
  }

  //? utilizacion de los arreglos de la api
  let pokemons = []
  if(selectorType === 'none'){
     pokemons = pokemonsArray.map((poke) => <Pokemon url={poke} key={poke.name}/>)
  }else{
    pokemons = pokemonsArray.map((poke) => <Pokemon url={poke.pokemon} key={poke.pokemon.name}/>)
  }
  let arrayPokeFilter = pokemons.slice(page, page + 9)
  //! cambio para el filtro de pokemons por tipo
  const cambio2 =  (value) =>{
     if(value === 'next'){
        if(page > pokemons.length){
            return
         }else{
            setPage(page + 9)
         }
     }else{
        if(page <= 0){
            return
         }else{
            setPage(page - 9)
         }
     }
  }
    return (
        <div className='home'>
            <Search/>
            <div className='buttons'>
                <button onClick={selectorType === 'none' ? () => cambio('prev') : () => cambio2('prev')}>PREV</button>
                <button onClick={selectorType === 'none' ? () => cambio('next') : () => cambio2('next')}>NEXT</button>
            </div>
            <div className='list-pokemon'>
                {selectorType === 'none' ? pokemons : arrayPokeFilter}
            </div>
            <div className='buttons'>
            <button onClick={selectorType === 'none' ? () => cambio('prev') : () => cambio2('prev')}>PREV</button>
                <button onClick={selectorType === 'none' ? () => cambio('next') : () => cambio2('next')}>NEXT</button>
            </div>
        </div>
    )
}

export default Home