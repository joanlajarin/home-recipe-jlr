export default function CategoryMeals({meal, onMealClick}) {

    const showRecipes = () => {
        onMealClick(meal.strCategory, meal.idCategory, true )
    }

    return(
        <div
            
            id={`meal-${meal.idCategory}`}
            onClick={showRecipes} 
            className='category-meals relative flex items-center overflow-hidden h-[64px] lg:w-[250px] border  rounded-lg border-[#394150] text-[#E5E7EB]'
        >
            <img className='absolute left-[-40px] w-[80px] rounded-xl' src={meal.strCategoryThumb}></img>
            <span 
                id={`span-${meal.idCategory}`}
                className='ml-[52px] '
            >{meal.strCategory}</span>
        </div>
    )
}