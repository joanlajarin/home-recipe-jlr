import { useState } from "react"
import CategoryMeals from "./CategoryMeals"

export default function ListOfCategoryMeals({meals}) {
    const [totalPosition, setTotalPosition] = useState(Math.ceil(meals.length / 6))
    const [position, setPosition] = useState(0)

    return (    
        <section className="flex flex-col h-fit px-[40px] md:p-[0] gap-[32px] bg-[#0E1325] md:w-[250px] ">
            <span className="text-[#E5E7EB] text-2xl font-semibold" id='span-categories'>Categories</span>
            <div className=" grid grid-cols-2 md:flex md:flex-col h-fit gap-[12px]">
            {              
                meals && meals.slice(0,6).map( meal => <CategoryMeals key={meal.id} meal={meal}/>)
            }
            </div>
            <div className="flex justify-between">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="#394150" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="#394150"/>
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </button>
            </div>
        </section>    
    )
}

