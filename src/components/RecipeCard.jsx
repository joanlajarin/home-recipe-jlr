import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

export default function RecipeCard({recipe}) {

    const [detailRecipe, setDetailRecipe] = useState()
    const navigate = useNavigate()

    const getDetailsRecipe = () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
        return fetch(url)
            .then( response => response.json())
                .then(data => {
                    console.log(data.meals[0])
                    setDetailRecipe(data.meals[0])
                })
    }

    const showDetailRecipe = () => {
        window.alert("chagneWeb")
        getDetailsRecipe()
            .then(() => {
                console.log(detailRecipe)
                navigate('/detailRecipe', {state: {detailRecipe}})
        })
    }

    return (
        <div onClick={showDetailRecipe} className="flex flex-col w-full lg:w-[330px] xl:w-[280px] bg-[#394150] p-[8px] rounded-xl">
             <div className="overflow-hidden h-[200px] flex justify-center items-center">
                 <img className=' object-center object-cover w-full lg:h-[200px] rounded-lg' src={recipe.strMealThumb}></img>
            </div>   
            <span className='text-[#E5E7EB] pt-[8px]'>{recipe.strMeal}</span>
        </div>
    )
}