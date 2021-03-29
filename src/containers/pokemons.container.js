import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Pokemon from '../components/pokemon.component'
import { GET_POKEMONS } from '../graphql/get-pokemons'

const PokemonesContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    })

    return (
        <div className="container">
            {pokemons && pokemons.map((pokemon, index) => <Pokemon key = {index} pokemon = {pokemon} />)}
        </div>
    )
}


export default PokemonesContainer
