interface PokemonAttackProps {
  name: string;
  type: string;
  damage: string;
}

export function PokemonAttack({ name, type, damage }: PokemonAttackProps) {
    return (
        <div 
        className="group rounded-lg border border-transparent m-3 px-2 py-2 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        style={{ position: "relative", width: "150px", height: "100px" }}>
            <h2 className="text-l text-center font-bold">
                {name}
            </h2>
            <h2 className="text-l text-left m-1">
                Type: {type} <br/>
                Damage: {damage}
            </h2>
        </div>
    )
}
