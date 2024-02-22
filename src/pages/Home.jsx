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
    const [sortBy, setSortBy] = useState('name')
    const [valueInput, setValueInput] = useState('')
    const [resetPosition , setResetPosition] = useState('')


    const getMeals = () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(response => response.json())
                .then( data => setMeals(data.categories))
                .catch(error => console.log(error)) 
    }

    const getRecipes = (category = 'Dessert') => {
        const url  = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        fetch(url)
            .then(response => response.json())
                .then( data => setRecipes(data.meals))  
                .catch(error => console.log(error))
    }
    const handleMealCategory = (category, resetPosition ) => {
        if (category) {
            setCategory(category)
        }
        if(resetPosition) {
            setResetPosition(resetPosition)
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

    const handleKeyDown = (event) => {
        const uniqueRecipes = {}
        if (event.key === 'Enter') {
            //get recipes with the value of input searching for name
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueInput}`)
            .then(response => response.json())
                .then( data => {
                    console.log(data.meals)
                    if(data.meals) {
                        data.meals.forEach(obj => {
                            const key = obj.idMeal 
                            if (!uniqueRecipes.hasOwnProperty(key)) {
                                uniqueRecipes[key] = obj;
                            }
                        })                    } 
                    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${valueInput}`)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data )
                    if(data.meals) {
                        data.meals.forEach(obj => {
                            const key = obj.idMeal 
                            if (!uniqueRecipes.hasOwnProperty(key)) {
                                uniqueRecipes[key] = obj;
                            }
                        })                      
                    }
                    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${valueInput}`)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data )
                    if(data.meals) {
                        data.meals.forEach(obj => {
                            const key = obj.idMeal 
                            if (!uniqueRecipes.hasOwnProperty(key)) {
                                uniqueRecipes[key] = obj;
                            }
                        })  
                    }
                    const uniqueArray = Object.values(uniqueRecipes);
     
                    setRecipes(uniqueArray)
                })
                .catch(error => {
                    console.log(error)
                })
            }
            //remove highlight of the categories
      }


    
    return (
        <section className="w-screen h-full bg-[#0E1325]">
            <header className='w-auto relative p-[12px]'>
                <img className='rounded-lg w-full' src={heroImg}></img>
                <img className='absolute w-[200px] sm:w-[w-250px] md:w-[300px] lg:w-[380px] bottom-[20px] lg:bottom-[40px] xl:bottom-[80px] right-[24px] lg:right-[120px] xl:right-[240px]' src={heroTextImg}></img>
            </header>
            <main className='flex flex-col lg:flex-row justify-center h-fit w-screen mt-[20px] gap-[40px]'>
                <ListOfCategoryMeals onMealClick={handleMealCategory} meals={meals}/>
                <section className='flex flex-col gap-[40px] px-[40px] lg:p-[0]'>
                    <div className='flex justify-between gap-[20px] '>
                        <input 
                            type="text"
                            className='bg-search-image bg-no-repeat bg-[18px] pl-[50px] placeholder-[#394150] w-[380px] border-2 border-[#394150] rounded-3xl py-[12px] px-[24px] bg-[#0E1325] text-white'
                            placeholder='Search recipes and more...'
                            onChange={(e) => setValueInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div 
                            className='flex items-center text-[14px] px-[24px] py-[10px] bg-[#E5E7EB] rounded-3xl'>
                            <label className='font-medium'>Sort by: </label>
                            <select className='pr-[10px] font-bold' onChange={handleSortChange}>
                                <option value='name'>Name</option>
                                <option value="id">Id</option>
                            </select>
                        </div>
                    </div>
                <ListOfRecipes recipes={recipes} sort={sortBy} showRecipes={resetPosition}/>
                </section>
            </main>
        </section>
    )
}