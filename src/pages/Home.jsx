import heroImg from '../images/hero-imagehc.jpg'
import heroTextImg from '../images/hero-text.svg'

export default function Home() {
    return (
        <section className="w-full h-full bg-[#0E1325]  ">
            <header className='relative p-[12px]'>
                <img className='rounded-lg' src={heroImg}></img>
                <img className='absolute bottom-[80px] right-[240px]' src={heroTextImg}></img>
            </header>
            <main>

            </main>
        </section>
    )
}