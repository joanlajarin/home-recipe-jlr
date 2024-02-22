import LogoLight from '../images/logo-light.svg'
import ExpandLeft from '../images/Expand_left.svg'
import {  useLocation  } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'


export default function Home() {
    const location = useLocation()
    const [recipe, setRecipe] = useState()
    const navigate = useNavigate()

    const backToHome = () => {
        navigate('/')
    }

    useEffect(() => {
        console.log("detailRecipe")
        console.log(location.state)
        setRecipe(location.state.detailRecipe)
    },[])

    return (
        <section className='bg-[#0E1325] h-full flex flex-col justify-center items-center'>
            <header className='w-full flex justify-between pt-[32px] pb-[52px] max-w-[1136px]'>

                <img src={LogoLight}></img>
                <div onClick={backToHome} className='bg-[#E5E7EB] flex py-[12px] px-[25px] rounded-full'>
                    <img src={ExpandLeft}></img>
                    <span>Back to categories</span>
                </div>
            </header>
            <main className='w-[616px] max-w-[1136px]'>
            {
                recipe && (
                    <section className='text-[#E5E7EB]'>
                        <img className='rounded-xl h-[400px] mb-[32px]' src={recipe.strMealThumb}></img>
                        <h1 id="span-recipes" className='text-[24px] mb-[20px]'>{recipe.strMeal}</h1>
                        <div className='flex gap-[12px] mb-[40px]'>
                            <div className='bg-[#394150] rounded-2xl py-[8px] px-[24px]'>
                                <label className='text-[12px] font-thin	'>category:</label>
                                <span className='text-[14px] font-semibold'>{recipe.strCategory}</span>
                            </div>
                            <div className='bg-[#394150] rounded-2xl py-[8px] px-[24px]'>
                                <label className='text-[12px] font-thin'>area:</label>
                                <span className='text-[14px] font-semibold'>{recipe.strArea}</span>
                            </div>
                        </div>
                        <h1 className='font-semibold mb-[16px]'>Ingredients</h1>
                        <ul>
                            {
                                Object.keys(recipe).map(
                                    key => {
                                        if(key.startsWith('strIngredient') && recipe[key]) {
                                           return  <li className='mb-[12px]'>{recipe[key]}</li>
                                        } 
                                })
                            }
                        </ul>
                        <h1 className='font-semibold mt-[40px] mb-[16px]' >Instructions</h1>
                        <p className='mb-[120px]'>{recipe.strInstructions}</p>
                    </section>
                )
            }
            </main>
        </section>
    )
}