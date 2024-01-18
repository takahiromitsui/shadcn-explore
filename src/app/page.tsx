import { getRecipes } from '@/api/recipes';
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';

export default async function Home() {
	const recipes = await getRecipes();

	return (
		<main>
			<div className='grid grid-cols-3 gap-8'>
				{recipes.map(recipe => (
					<Card key={recipe.id} className='flex flex-col justify-between'>
						<CardHeader className='flex-row  gap-4 items-center'>
							{/*avatar*/}
							<div>
								<CardTitle>{recipe.title}</CardTitle>
								<CardDescription>{recipe.time} mins to cook</CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<p>{recipe.description}</p>
						</CardContent>
						<CardFooter className='flex justify-between'>
							<button>View Recipe</button>
							{recipe.vegan && <p>Vegan !</p>}
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
