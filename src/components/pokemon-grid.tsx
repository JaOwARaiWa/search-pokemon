"use client"

import { useState } from "react";
import { Input } from "@nextui-org/react";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any;
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("");

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList);

    const showNotFound = () => {
        if (searchText != "" && filteredPokemonList.length == 0) {
            return "Not Found Your Pokemon."
            
        }
    }

    return (
        <>
            <div>
                <h1 className="text-2xl py-6 text-center">PokeDex</h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Input
                        type="text"
                        label="Search Pokemon"
                        placeholder="Ex. Pikachu, Balbasaur, etc."
                        autoComplete="off"
                        value={searchText}
                        id="pokemonName"
                        onChange={(e) => setSearchText(e.target.value)}
                        style={{ marginTop: "10px", padding: "3px", borderWidth: "3px", borderColor: "white"}}
                    />
                </div>
                <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {showNotFound()}

                {filteredPokemonList.map((pokemon: any) => {
                    return (
                        <PokemonCard image={pokemon.image} name={pokemon.name} />
                    )
                })}
            </div>
        </>
    );
};