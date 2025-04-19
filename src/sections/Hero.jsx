
import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/heroModel/HeroExperience'


const Hero = () => {
    return (
        <section id='hero' className=' relative overflow-hidden'>

            <div className='absolute top-0 left-0 z-0'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/* left hero content*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>
                                Shaping
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>{word.text}</span>

                                            </span>
                                        ))}
                                    </span>
                                </span>

                            </h1>
                            <h1>Transforming <span className='text-9xl text-blue-950'> Code</span> <br /> into Impactful Solutions</h1>
                            <h1>From Ideas to Real-World Applications</h1>
                        </div>
                        <p className=' text-white-50 relative md:text-xl pointer-events-none z-10 '>
                            Hi, I'm Kevin, <br /> a passionate web and mobile developer based in TOGO, currently studying at IAI.
                        </p>
                        <Button
                            className='md:w-80 md:h-16  w-60 h-12 '
                            id='button'
                            text='see my work' />
                    </div>

                </header>
                {/* right 3d model  */}
                <figure>
                    <div className='hero-3d-layout' >
                        <HeroExperience />
                    </div>
                </figure>
            </div>

        </section>
    )
}

export default Hero