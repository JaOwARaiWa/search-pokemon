"use client"

import { useQuery } from '@apollo/client';
import { getPokemons } from "@/lib/queries/get-pokemons";
import PokemonGrid from "@/components/pokemon-grid";

export default function Home() {
	
	const { loading, error, data } = useQuery(getPokemons, {variables: { first: 151 }});

  	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error: {error.message}</p>;
	if (data.pokemons) return (
		<>
			<PokemonGrid pokemonList={data.pokemons} />
    	</>
	)
};
