import Hero from '@/components/hero'
import HomeDetailCard from '@/components/homeDetailCard'
import Categories from '@/components/categories'
import Inbox from '@/components/inbox'
import { foodItems as foodData } from '@/data/data'
const foodCategories = [
  'Italian Cuisine',
  'Asian Cuisine',
  'Mediterranean Cuisine',
  'Mexican Cuisine',
  'Comfort Food',
  'Desserts and Sweets'
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-4 p-4">
      <Hero />
      <h2 className='text-2xl font-bold'>Super Delicous</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {foodData.map((food, index) => (
          <HomeDetailCard key={index} {...food} />
        ))}
      </div>
      <h2 className='text-2xl font-bold'>Popular categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {foodCategories.map((category, index) => {
          return (
            <Categories key={index} title={category} />
          )
        })}
      </div>
      <Inbox />
    </main>

  )
}
//https://source.unsplash.com/random/?food