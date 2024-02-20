import LogoLight from '../images/logo-light.svg'
import ExpandLeft from '../images/Expand_left.svg'
import {  useLocation  } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Home() {
    const location = useLocation()
    const [recipe, setRecipe] = useState()

    useEffect(() => {
        console.log("detailRecipe")
        console.log(location.state)

        setRecipe(location.state.detailRecipe)
    },[])

    return (
        <section className='bg-[#0E1325] h-full'>
            <header className='flex justify-between mx-[60px] pt-[32px] pb-[52px]'>

                <img src={LogoLight}></img>
                <div className='bg-[#E5E7EB] flex py-[12px] px-[25px] rounded-full'>
                    <img src={ExpandLeft}></img>
                    <span>Back to categories</span>
                </div>
            </header>
            <main>
            {
                recipe && (
                    <section>
                        <img src={recipe.strMealThumb}></img>
                        <h1>{recipe.strMeal}</h1>
                        <h1>Ingredients</h1>
                        <h1>Isntructions</h1>
                        <p>{recipe.strInstructions}</p>
                    </section>
                )
            }
            </main>
        </section>
    )
}