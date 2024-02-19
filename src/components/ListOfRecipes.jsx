import RecipeCard from "./RecipeCard"

export default function ListOfRecipes({recipes}) {

            
    return(
            <div className="flex flex-col gap-[40px]">
                <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[32px] w-fit"> 
                { 
                    recipes && recipes.slice(0,6).map( recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
                }   
                </section>
                <div className="flex justify-between mb-[40px]">
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
            </div>

    )
}