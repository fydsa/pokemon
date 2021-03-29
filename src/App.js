import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import PokemonesContainer from './containers/pokemons.container'
import './App.css'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  })
  return (
    <ApolloProvider client = {client}>
      <PokemonesContainer />
    </ApolloProvider>
  );
}

export default App;




