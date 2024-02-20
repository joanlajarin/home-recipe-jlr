import { data } from 'autoprefixer'
import heroImg from '../images/hero-imagehc.jpg'
import heroTextImg from '../images/hero-text.svg'
import { useState } from 'react'

import ListOfCategoryMeals from '../components/ListOfCategoryMeals'
import ListOfRecipes from '../components/ListOfRecipes'
import { useEffect } from 'react'

export default function Home() {

    const [meals, setMeals] = useState([])
    const [recipes, setRecipes] = useState([])
    const [category, setCategory] = useState()
    const [sortBy, setSortBy] = useState('name');


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
    const handleMealCategory = (category) => {
        if (category) {
            console.log(category)
            setCategory(category)
        }
    }

    const handleSortChange = (event) => {
        setSortBy(event.target.value)

    }

    useEffect(() =>{
        getRecipes(category)
    },[category])
    
    useEffect(() => {
        getMeals()
        getRecipes(category)
    },[])



    return (
        <section className="w-screen h-full bg-[#0E1325]">
            <header className='w-auto relative p-[12px]'>
                <img className='rounded-lg w-full' src={heroImg}></img>
                <img className='absolute w-[200px] sm:w-[w-250px] md:w-[300px] lg:w-[380px] bottom-[20px] lg:bottom-[40px] xl:bottom-[80px] right-[24px] lg:right-[120px] xl:right-[240px]' src={heroTextImg}></img>
            </header>
            <main className='flex flex-col lg:flex-row justify-center h-fit w-screen mt-[32px] gap-[40px]'>
                <ListOfCategoryMeals  onMealClick={handleMealCategory}  meals={meals}/>
                <section className='flex flex-col gap-[40px] px-[40px] lg:p-[0]'>
                    <div className='flex justify-between gap-[20px] '>
                        <input 
                            className='w-[380px] border-2 border-[#394150] rounded-3xl py-[12px] px-[24px] bg-[#0E1325]'
                            placeholder='Search recipes and more...'
                        />
                        <select className='px-[24px] py-[12px] rounded-3xl' onChange={handleSortChange}>
                            <option value='name'>Sort by:Name</option>
                            <option value="id">Sort by:Id</option>
                        </select>
                    </div>
                <ListOfRecipes recipes={recipes} sort={sortBy}/>
                </section>
            </main>
        </section>
    )
}