
export default function RecipeCard({recipe}) {

    return (
        <div className="flex flex-col w-fit">
            <img className='w-[300px]' src={recipe.strMealThumb}></img>
            <span className='w-[300px]'>{recipe.strMeal}</span>
        </div>
    )
}