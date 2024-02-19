export default function CategoryMeals({meal, onMealClick}) {
 
    const showRecipes = () => {
        onMealClick(meal.strCategory)    
    }
    return(
        <div onClick={showRecipes} className="relative flex items-center overflow-hidden h-[64px] md:w-[250px] border border-[#394150] rounded-lg ">
            <img className='absolute left-[-40px] w-[80px] rounded-xl' src={meal.strCategoryThumb}></img>
            <span className="text-[#E5E7EB] ml-[52px]">{meal.strCategory}</span>
        </div>
    )
}