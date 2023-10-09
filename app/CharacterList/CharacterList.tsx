import React from "react";
import { CharacterProps } from "../types/CharacterProps";
import Image from "next/image";

const CharacterList = ({ characters }: { characters: CharacterProps[] }) => {
	const renderCharacters = characters.map((character: CharacterProps) => {
		return (
			<div
				key={character.id}
				className="flex flex-col gap-1 w-60 h-60 p-2 items-center"
			>
				<Image
					className="border-solid border-2 rounded-lg duration-300 hover:scale-105"
					src={character.image}
					alt="thumbnail"
					width={180}
					height={100}
				/>
				<span>{character.name}</span>
			</div>
		);
	});
	return (
		<div className="flex flex-wrap gap-1 p-1 min-h-[1000px]">
			{renderCharacters}
		</div>
	);
};

export default CharacterList;
