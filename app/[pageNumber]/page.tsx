import React from "react";
import { fetchCharacters } from "../api/apis";
import { CharacterProps } from "../types/CharacterProps";
import CharacterList from "../CharacterList/CharacterList";
import Pagination from "../Pagination/Pagination";

const Page = async ({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) => {
	const fetchResult = await fetchCharacters(+pageNumber);
	const totalPage = fetchResult.info.pages;
	const charactersWithProps = fetchResult.results.map((character: any) => {
		return {
			name: character.name,
			image: character.image,
			id: character.id,
		} as CharacterProps;
	});
	return (
		<div className="flex flex-col items-center">
			<CharacterList characters={charactersWithProps} />
			<Pagination curPage={+pageNumber} totalPage={+totalPage} />
		</div>
	);
};

export default Page;
