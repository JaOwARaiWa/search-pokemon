import { gql } from '@apollo/client';

export const getSinglePokemon = gql`
query pokemon($name: String) {
    pokemon(name: $name) {
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
        attacks {
            fast {
                name
                type
                damage
            }
            special {
                name
                type
                damage
            }
        }
        evolutions {
            id
            number
            name
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            image
        }
        image
    }
}
`