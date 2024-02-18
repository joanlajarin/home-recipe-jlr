import CategoryMeals from "./CategoryMeals"

export default function ListOfCategoryMeals({meals}) {
    return (    
        <section className="flex flex-col h-fit gap-[32px] bg-[#0E1325]  w-[250px] ">
            <span className="text-[#E5E7EB] text-2xl font-semibold" id='span-categories'>Categories</span>
            <div className="flex flex-col h-fit gap-[12px]">
            {
                meals && meals.map( meal => <CategoryMeals key={meal.id} meal={meal}/>)
            }
            </div>
        </section>    
    )
}

