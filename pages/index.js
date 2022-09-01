import Head from 'next/head'
import Image from 'next/image'
import MyBanner from '../components/MyBanner'
import NavBar from '../components/Navbar'
import Layout from '../components/Layout'
import Info from '../components/Info'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        function update(e){
            var x = e.clientX || e.touches[0].clientX
            var y = e.clientY || e.touches[0].clientY
          
            document.documentElement.style.setProperty('--cursorX', x + 'px')
            document.documentElement.style.setProperty('--cursorY', y + 'px')
          }
          
          document.addEventListener('mousemove',update)
          document.addEventListener('touchmove',update)
          return ()=>{
            document.removeEventListener('mousemove',update)
            document.removeEventListener('touchmove',update)
          }
    })
  return (
      <Layout>
          <div className=''>
              <MyBanner/>
              <Info/>
              <Footer/>
          </div>
      </Layout>

  )
}
