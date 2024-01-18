export type RecipeResponse = {
	id: string;
	title: string;
	image: string;
	time: number;
	description: string;
	vegan: boolean;
};

export async function getRecipes(): Promise<RecipeResponse[]> {
	const response = await fetch('http://localhost:4000/recipes');
	const data = await response.json();
  // delay
  await new Promise(resolve => setTimeout(resolve, 3000))
	return data;
}
