import Link from "next/link";
import { PokemonImage } from "./pokemon-image";

interface PokemonCardProps {
  image: string;
  name: string;
}

export function PokemonCard({ image, name }: PokemonCardProps) {
    return (
        <Link
          href={name}
          className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          key={name + "Card"}
        >
          <div className="m-4" style={{ position: "relative", width: "100px", height: "100px" }}>
            <PokemonImage
                image={image}
                name={name}
            />
          </div>
          <h2 className="text-2xl font-semibold text-center">
            {name}
          </h2>
        </Link>
    )
}
