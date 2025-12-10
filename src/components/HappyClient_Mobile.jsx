import React from 'react'
import happyClientMobileData from '../json/HappyClient_Mobile.json'

const HappyClient_Mobile = () => {
  return (
    <section className='block md:hidden'>
        <div>
        {/* Header - RESPONSIVE: remove hardcoded widths */}
        <div className="text-center px-4 md:px-10">
          <h2 className="text-xl md:text-2xl font-semibold max-w-full mx-auto mb-2">
            {happyClientMobileData.header.title} <span className="text-primary">{happyClientMobileData.header.titleHighlight}</span>
          </h2>
          <p className="text-black text-xs md:text-sm max-w-md mx-auto mb-6 md:mb-10">
            {happyClientMobileData.header.description}
          </p>
        </div>
        {/* RESPONSIVE: 1 column mobile, 2 columns on small tablets (if needed) */}
        <div className='grid grid-cols-1 sm:grid-cols-2 p-4 px-4 md:px-10 gap-4'>
        {happyClientMobileData.cards.map((card) => (
            <div key={card.id} className='group p-0.5 rounded-xl bg-white hover:bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] transition'>
                <div className='p-4 md:p-6 rounded-xl bg-white h-full w-full'>
                   <div className="p-[2px] rounded-2xl bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2">
                     <span className="bg-white rounded-xl w-full h-full flex items-center justify-center group-hover:bg-[linear-gradient(135deg,#FBCD61_10.42%,#0E2925_100%)] text-lg md:text-xl group-hover:text-white transition">
                         {card.number}                       
                  </span>
                 </div>
                 <h4 className='font-semibold text-base md:text-xl mb-2'>{card.title}</h4>
                    <p className='text-secondary text-xs md:text-sm'>{card.description}</p>
                </div>
            </div>
        ))}


        </div>
        </div>
    </section>
  )
}

export default HappyClient_Mobile