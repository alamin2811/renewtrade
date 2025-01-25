import React from 'react'
import Header from '../../Core/Header/Index'
import BannerOne from './BannerOne'
import BuyCard from './BuyCard'
import WhatIs from './WhatIs'
import HowItWorks from './HowItWorks'

const HomeCompoennt = () => {
  return (
    <div className='home-page'>
        <Header/>
        <BannerOne/>
        <WhatIs/>
        <HowItWorks/>
    </div>
  )
}

export default HomeCompoennt