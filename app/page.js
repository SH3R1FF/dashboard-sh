import Image from 'next/image'
import Header from '../components/Header'
import SideNavbar from '../components/SideNavbar'
import TopCards from '../components/TopCards'
import BarChart from '../components/BarChart'
import RecentOrders from '../components/RecentOrders'

export default function Home() {
  return (
    // <main className='bg-gray-100 min-h-screen flex'>
    //   <SideNavbar />
      
    
    // </main>

    <SideNavbar>
  
      <main >
        <Header />
        <TopCards/>
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart/>
          <RecentOrders/>
        </div>
      </main>

  </SideNavbar>

  )
}
