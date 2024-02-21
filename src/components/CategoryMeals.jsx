export default function CategoryMeals({meal, onMealClick}) {
 

    const showRecipes = () => {
        //change background of my component to yellow
        if (lastClickedId) {
            const prevMeal = document.getElementById(`meal-${lastClickedId}`)
            const prevText = document.getElementById(`span-${lastClickedId}`)
            if (prevMeal) {
                prevMeal.classList.remove('bg-[#FEBD2E]')
                prevText.classList.remove('text-black')
                prevMeal.classList.add('text-[#E5E7EB]')
            }
        }
        // Add background color to the current clicked meal
        const currentMeal = document.getElementById(`meal-${meal.idCategory}`)
        const currentText = document.getElementById(`span-${meal.idCategory}`)

        if (currentMeal) {
            currentMeal.classList.add('bg-[#FEBD2E]')
            currentText.classList.add('text-black')
            currentMeal.classList.remove('text-[#E5E7EB]');

        }
        // Call the onMealClick function
        onMealClick(meal.strCategory, meal.idCategory )
    }

    return(
        <div
            id={`meal-${meal.idCategory}`}
            onClick={showRecipes} 
            className='relative flex items-center overflow-hidden h-[64px] lg:w-[250px] border border-[#394150] rounded-lg'
        >
            <img className='absolute left-[-40px] w-[80px] rounded-xl' src={meal.strCategoryThumb}></img>
            <span 
                id={`span-${meal.idCategory}`}
                className='text-[#E5E7EB] ml-[52px]'
            >{meal.strCategory}</span>
        </div>
    )
}