import { gql } from '@apollo/client';

export const getPokemons = gql`
query pokemons($first: Int!) {
    pokemons(first: $first) {
        id
        number
        name
        weight {
            minimum
            maximum
        }
        height {
            minimum
            maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
    }
}`
