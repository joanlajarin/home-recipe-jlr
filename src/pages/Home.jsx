import { data } from 'autoprefixer'
import heroImg from '../images/hero-imagehc.jpg'
import heroTextImg from '../images/hero-text.svg'
import { useState } from 'react'

import ListOfCategoryMeals from '../components/ListOfCategoryMeals'

export default function Home() {

    const [meals, setMeals] = useState([])
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

    useState(() => {
        getMeals()
    },[])

    return (
        <section className="w-full h-full bg-[#0E1325] ">
            <header className='relative p-[12px]'>
                <img className='rounded-lg' src={heroImg}></img>
                <img className='absolute bottom-[80px] right-[240px]' src={heroTextImg}></img>
            </header>
            <main className='fex h-fit mt-[32px]'>
                <ListOfCategoryMeals meals={meals}/>
            </main>
        </section>
    )
}