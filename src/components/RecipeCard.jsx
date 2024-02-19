
export default function RecipeCard({recipe}) {

    return (
        <div className="flex flex-col w-full md:w-[280px] bg-[#394150] p-[8px] rounded-xl">
            <img className=' object-center object-cover	md:h-[200px] rounded-lg' src={recipe.strMealThumb}></img>
            <span className='text-[#E5E7EB] pt-[8px]'>{recipe.strMeal}</span>
        </div>
    )
}