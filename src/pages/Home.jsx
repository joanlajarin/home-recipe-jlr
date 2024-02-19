import { data } from 'autoprefixer'
import heroImg from '../images/hero-imagehc.jpg'
import heroTextImg from '../images/hero-text.svg'
import { useState } from 'react'

import ListOfCategoryMeals from '../components/ListOfCategoryMeals'
import ListOfRecipes from '../components/ListOfRecipes'

export default function Home() {

    const [meals, setMeals] = useState([])
    const [recipes, setRecipes] = useState([])


    const getMeals = () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(response => response.json())
                .then( data => {
                    console.log(data)
                    setMeals(data.categories)
                    console.log(typeof meals)
                }
                )
                .catch(error => {
                   console.log(error) 
                }) 
    }

    const getRecipes = (category = 'Dessert') => {
        const url  = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        fetch(url)
            .then(response => response.json())
                .then( data => {
                    console.log(data.meals)
                    setRecipes(data.meals)
                })  
                .catch(error => {
                    console.log(error)
                })
    }

    useState(() => {
        getMeals()
        getRecipes()
    },[])

    return (
        <section className="w-screen h-full bg-[#0E1325]">
            <header className='w-auto relative p-[12px]'>
                <img className='rounded-lg w-full' src={heroImg}></img>
                <img className='absolute md:w-[350px] lg:w-[400px] bottom-[20px] lg:bottom-[40px] xl:bottom-[80px] right-[24px] lg:right-[120px] xl:right-[240px]' src={heroTextImg}></img>
            </header>
            <main className='flex flex-col md:flex-row justify-center h-fit w-screen mt-[32px] gap-[40px]'>
                <ListOfCategoryMeals meals={meals}/>
                <section className='flex flex-col gap-[40px]'>
                    <div className='flex justify-between '>
                        <input 
                            className='border-2 border-[#394150] rounded-3xl py-[12px] px-[24px] bg-[#0E1325]'
                            placeholder='Search recipes and more...'
                        />
                        <select className='px-[24px] py-[12px] rounded-3xl'>
                            <option>Sort by:Name</option>
                        </select>
                    </div>
                <ListOfRecipes recipes={recipes}/>
                </section>
            </main>
        </section>
    )
}