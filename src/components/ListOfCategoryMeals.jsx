import CategoryMeals from "./CategoryMeals"

export default function ListOfCategoryMeals({meals}) {
    return (    
        <section className="flex flex-col h-fit gap-[12px] bg-[#0E1325] ">
            <span className="text-[#E5E7EB] mb-[20px] text-2xl	font-semibold" id='span-categories'>Categories</span>
            {
                meals && meals.map( meal => <CategoryMeals key={meal.id} meal={meal}/>)
            }
        </section>    
    )
}

