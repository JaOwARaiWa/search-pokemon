"use client"

import { useQuery } from '@apollo/client';
import { getSinglePokemon } from "@/lib/queries/get-single-pokemon";
import { PokemonImage } from "@/components/pokemon-image";
import { PokemonCard } from '@/components/pokemon-card';
import { PokemonAttack } from '@/components/pokemon-attack';

function showAttacks(pokemon, attacks) {
    return attacks.map((attack: any) => {
        return (
            <PokemonAttack name={attack.name}
                            type={attack.type}
                            damage={attack.damage}
                            key={pokemon + " " + attacks.name}
            />
        )
    })
}
function showEvolution(evolutions) {
    if (evolutions === null) {
        return (
            <h3>No Evolution for this Pokemon.</h3>
        )
    } else {
        return evolutions.map((pokemon: any) => {
            return (
                <PokemonCard image={pokemon.image}
                                name={pokemon.name}
                                key={pokemon.id}
                />
            )
        })
    }
}

export default function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    const { loading, error, data } = useQuery(getSinglePokemon, {variables: { name: pokemonName }});
    

  	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error: {error.message}</p>;
	if (data.pokemon) return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName}</h1>
            <div className="m-4" style={{ position: "relative", width: "200px", height: "200px" }}>
                <PokemonImage
                    image={data.pokemon.image}
                    name={pokemonName}
                />
            </div>
            <h3 className="font-bold">Infomation</h3>
            <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Number: </h3>
                    <h3 className="text-right">{data.pokemon.number}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Classification: </h3>
                    <h3 className="text-right">{data.pokemon.classification}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Types: </h3>
                    <h3 className="text-right">
                        {data.pokemon.types.reduce((pre, cur, i) => {
                            return i === 0 ? cur : `${pre}, ${cur}`;
                        }, '')}
                    </h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Resistants: </h3>
                    <h3 className="text-right">
                        {data.pokemon.resistant.reduce((pre, cur, i) => {
                            return i === 0 ? cur : `${pre}, ${cur}`;
                        }, '')}
                    </h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">weaknesses: </h3>
                    <h3 className="text-right">
                        {data.pokemon.weaknesses.reduce((pre, cur, i) => {
                            return i === 0 ? cur : `${pre}, ${cur}`;
                        }, '')}
                    </h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Weight: </h3>
                    <h3 className="text-right">{data.pokemon.weight.minimum + " ~ " + data.pokemon.weight.maximum}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Height: </h3>
                    <h3 className="text-right">{data.pokemon.height.minimum + " ~ " + data.pokemon.height.maximum}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Max CP: </h3>
                    <h3 className="text-right">{data.pokemon.maxCP}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Max HP: </h3>
                    <h3 className="text-right">{data.pokemon.maxHP}</h3>
                </div>
                <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
                    <h3 className="font-bold">Flee rate: </h3>
                    <h3 className="text-right">{data.pokemon.fleeRate}</h3>
                </div>
            </div>
            <br />
            <h3 className="font-bold">Attack Skills</h3>
            <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h3 className="font-bold">Fast Attacks: </h3>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
                    {showAttacks(pokemonName, data.pokemon.attacks.fast)}
                </div>
                <br />
                <h3 className="font-bold">Special Attacks: </h3>
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
                    {showAttacks(pokemonName, data.pokemon.attacks.special)}
                </div>
            </div>
            <br />
            <h3 className="font-bold">Evolutions</h3>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-center">
                {showEvolution(data.pokemon.evolutions)}
            </div>
        </>
    )
}