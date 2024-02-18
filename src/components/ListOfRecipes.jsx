import RecipeCard from "./RecipeCard"

export default function ListOfRecipes({recipes}) {

            
    return(
        <section className="grid grid-cols-3 gap-[32px] w-fit">  
            { 
                recipes && recipes.map( recipe => <RecipeCard recipe={recipe}/>)
            }   
        </section>
    )
}