import { BASE_URL } from "./constants";

export const fetchCharacters = async (pageNumber: number) => {
	const result = await fetch(`${BASE_URL}/character/?page=${pageNumber}`);
	if (!result.ok) {
		throw new Error("Failed to fetch characters");
	}
	return result.json();
};
