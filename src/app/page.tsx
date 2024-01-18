import { getRecipes } from '@/api/recipes';
import { Button } from '@/components/ui/button';

import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar';

import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


export default async function Home() {
	const recipes = await getRecipes();

	return (
		<main>
			<div className='grid grid-cols-3 gap-8'>
				{recipes.map(recipe => (
					<Card key={recipe.id} className='flex flex-col justify-between'>
						<CardHeader className='flex-row  gap-4 items-center'>
							<Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt='recipe img'/>
                <AvatarFallback>{recipe.title.slice(0,2)}</AvatarFallback>
              </Avatar>
							<div>
								<CardTitle>{recipe.title}</CardTitle>
								<CardDescription>{recipe.time} mins to cook</CardDescription>
							</div>
						</CardHeader>
						<CardContent>
							<p>{recipe.description}</p>
						</CardContent>
						<CardFooter className='flex justify-between'>
							<Button
               
              >View Recipe</Button>
							{recipe.vegan && 
                <Badge>
                  Vegan!
                </Badge>
              }
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
}
