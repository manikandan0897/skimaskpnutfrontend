import { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import pnutimg from './assets/squirelpnut.png';
import tokenomci from './assets/tokenomics.png';
import coingecko from './assets/coingecko.png';
import forbes from './assets/forbes.png';
import cmc from './assets/cmc.webp';
import dexscreen from './assets/dexscreener.png';
import dextools from './assets/dextools.png';
import geckoterminal from './assets/geckoterminal.png' 


import './App.css'

function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid mb-3">
          <a class="navbar-brand" href="#">SKIMASK PNUT</a>
          
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <button type="button" class="btn unibuy">Buy On Uniswap</button>
            </div>
          </div>
          <div className='d-flex'>
             <a class="nav-link me-4" href="#"><FaTelegram className='faicon'/></a>
              <a class="nav-link me-5" href="#"><FaXTwitter className='faicon'/></a>
          </div>
        </div>
      </nav>

      <div className='pt-4 mb-4'>
          <div className='boxcontainer'>
              <div className='row'>
                  <div className='col-lg-5'>
                      <img src={pnutimg} className='pnutimg'/>
                  </div>
                  <div className='col-lg-6 pt-4'>
                    <h4>This squirrel is <br/>here for the nuts.</h4>
                    <p className='pt-4 squirelheadpara'>
                      In the heart of Oakwood Forest, there lived a daring squirrel named SKIMASK Pnut. Known for his quick wit and nimble paws, Pnut had a knack for outsmarting the forest's most secure nut banks. One crisp autumn morning, donning his signature black ski mask, he embarked on his most ambitious heist yet. With the vigilant owl guards patrolling the area, Pnut managed to sneak past them and crack the vault wide open. As the golden acorns spilled out, Pnut couldn't help but chuckle, knowing that tonight, the forest would feast like never before.
                      <br/>
                      CA: <span className='address'>0x85cf87e35Bf9D20380889016bac20e519324d928</span>
                      <br/> 
                      DEV: <span className='address'>0x48D1B1BF9d582E6cEA8d372B56d50e8f9DCC2DD0</span>
                      <br/>
                      Dev Wallet it locked in a UNCX Vesting Locker for 30 days.
                    </p>
                    <div className='d-flex pt-3'> 
                      <button type="button" className='btn btnhome'>Buy on Uniswap</button>
                      <button type="button" className='btn btnhome'>Buy on Flooz</button>
                    </div>
                  </div>
              </div>  
              <div className='mt-4'>
                <img src={tokenomci} className='tokenics'/>
              </div>
              <div className='mt-4 p-4'>
                  <h5>What is Skimask Pnut about?</h5>
                  <p>Introducing Skimask Pnut (SKINUT), the latest sensation in the meme coin universe! Birthed from the wacky, whimsical corners of the internet, Skimask Pnut is not just a cryptocurrency, it's a movement, a culture, and an unending stream of laughter. Imagine combining the carefree spirit of memes with the dynamism of blockchain technology—what you get is SKINUT, a coin designed to bring fun, community, and a dash of mischief to the world of digital assets.</p>
              </div>
              <div className='p-3 mx-3'>
                <h5>The Essence of Skimask Pnut</h5>
                <p>At the heart of Skimask Pnut is a vibrant, enthusiastic community that thrives on humor, creativity, and collective engagement. The SKINUT community isn't just a group of investors—it's a family that celebrates every meme, every joke, and every quirky moment that life throws at us. We're here to remind the world that finance can be fun, and that digital currency doesn't have to be all serious business.</p>
              </div>
              <div className='p-3 mx-3'>
                 <h5>Community-Driven and Transparent</h5>
                 <p>SKINUT is built on the Base Network, a robust and secure blockchain that ensures transparency, speed, and reliability. What sets Skimask Pnut apart is its community-driven approach. Every major decision is made collectively, giving every holder a voice and a stake in the future of SKINUT. We believe in the power of the crowd, and that together, we can create something truly special.</p>
              </div>
              <div className='p-3 mx-3'>
                <h5>The Fun Factor</h5>
                <p>Let's face it—life can be stressful. But with Skimask Pnut, we're injecting a hefty dose of fun into the world of digital currency. Whether it's through our hilarious meme contests, quirky social media campaigns, or just the daily banter among community members, SKINUT is all about making the crypto experience enjoyable. We want to be the coin that brings a smile to your face every time you check your wallet.</p>
              </div>
              <div className='p-3 mx-3'>
                <h5>Growth and Innovation</h5>
                <p>While fun and community are at our core, we're also serious about growth and innovation. Skimask Pnut is constantly evolving, with new features, partnerships, and developments in the pipeline. We're working on integrating with popular platforms, launching merchandise, and even creating SKINUT-themed games. The possibilities are endless, and with our community's creativity, there's no limit to what we can achieve.
                    <br/>Join the SKINUT Revolution
                    <br/>If you're tired of the same old, mundane crypto projects, it's time to join the Skimask Pnut revolution. Be part of a community that values fun, creativity, and collective growth. Together, we can make SKINUT not just a coin, but a cultural phenomenon. So put on your digital ski mask, grab some peanuts, and let's take this wild ride together. Welcome to the world of Skimask Pnut!</p>
              </div>
              <div className='mx-4 mt-4'>
                <p>Remember, life is too short to be serious all the time—so why not have some fun with SKINUT?</p>
              </div>
          </div>
      </div>
      <div className='footer'>
        <div className='d-lg-flex text-center'>
          <div className='ms-4'>
            <img src={coingecko} className="coingecko"/>
          </div>
          <div className='ms-4'>
            <img src={forbes} className='forbes'/>
          </div>
          <div className='ms-4'>
            <img src={cmc} className='cmcimage'/>
          </div>
          <div className='ms-4'>
            <img src={dexscreen} className='cmcimage'/>
          </div>
          <div className='ms-4'>
            <img src={dextools} width="200px"/>
          </div>
          <div className='ms-4'>
              <img src={geckoterminal} className='gecko'/>
          </div>
        </div>
        <div className='mt-2 text-center footer-content'>
            <div className=''>manikandan.meme</div>
            <h4 className='mt-2'>SKIMASK PNUT</h4>
        </div>
      </div>
    </>
  )
}

export default App
