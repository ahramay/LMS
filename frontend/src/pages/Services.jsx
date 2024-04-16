import React from 'react'
import serviceImg from "../assets/services-bg.webp"
import Brandlogos from "../components/landingpage/Brandlogos"
import ServiceCard from '../components/ServiceCard'
import TeamCard from '../components/certification/TeamCard'

const Services = () => {
  return (
    <>
<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p className="mb-4 font-semibold text-black md:mb-6 md:text-lg xl:text-xl">
        Delighted to present with pride.
        </p>

        <h1 className="mb-8 text-4xl font-bold text-dark-blue sm:text-5xl md:mb-12 md:text-6xl">
        Committed to ensuring safety.
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, consectetur harum. 
            Aut omnis esse facilis nam harum quia eum placeat deserunt, ex sunt assumenda quaerat!
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <button className="inline-block rounded-lg bg-theme-green px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-black transition duration-100 hover:bg-dark-blue focus-visible:ring  md:text-base">ipsum</button>
          <button className="inline-block rounded-lg bg-dark-blue px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-black transition duration-100 hover:bg-theme-green hover:text-black focus-visible:ring  md:text-base">Embark on a tour</button>
        </div>
      </div>
 
      <div className="rounded-lg">
        <img src={serviceImg} loading="lazy" alt="services photo" className=" w-full  h-full object-contain object-center" />
      </div>
    </section>

    <section className='py-8'>  
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        The edge that sets us apart in competition
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur cupiditate illum, 
       molestiae obcaecati eaque 
       officiis itaque eius aut? Consequatur, totam voluptate incidunt laborum aliquid fuga?
      </p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
       {Array(6).fill(0).map((_,index)=><ServiceCard key={index}/>)}
    </div>
    </section>

    <section className='py-8'>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Endorsed by top entities</h2>
            <Brandlogos/>
    </section>

    <section className='py-8'>
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
      Quantifying Our Team's Strengths
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit tempora dolorum dolor
       atque quidem dolorem laboriosam possimus obcaecati? Autem, doloribus!
      </p>
    </div>
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
        {Array(4).fill(0).map((_,i)=><div className="flex flex-col items-center md:p-4" key={i}>
        <div className="text-xl font-bold sm:text-2xl md:text-3xl">200</div>
        <div className="text-sm font-semibold sm:text-base">People</div>
      </div>)}
    </div>
    </section>

    <section className='py-8'>

    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
      Introducing the members of our team:
      </h2>
      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur sapiente veritatis 
        consequatur nihil quas perferendis vero dolore sed ullam.
      </p>
    </div>


    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {Array(8).fill(0).map((_,i)=><TeamCard key={i}/>)}
    </div>
    </section>
  </div>
</div>




  





    
    
    </>
  )
}

export default Services





