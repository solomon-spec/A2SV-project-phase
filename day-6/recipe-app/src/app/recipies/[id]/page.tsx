'use client'
import { foodItems } from '@/data/data';
import { useParams } from 'next/navigation';
const data = {
    title: 'Margherita Pizza',
    description: 'A classic pizza topped with fresh tomatoes, mozzarella, and basil leaves. Simple and delicious!',
    author: 'Carlos Gonzalez',
    ingredients: [
        'Pizza dough',
        'Fresh tomatoes',
        'Fresh mozzarella cheese',
        'Fresh basil leaves',
        'Olive oil',
        'Salt',
        'Garlic',
    ],
    instructions: [
        'Preheat your oven to the highest temperature (usually around 500°F or 260°C).',
        'Roll out the pizza dough on a floured surface to your desired thickness.',
        'Place the rolled-out dough on a pizza stone or baking sheet.',
        'Drizzle olive oil over the dough and spread minced garlic evenly.',
        'Arrange thin slices of fresh mozzarella cheese on top of the dough.',
        'Slice fresh tomatoes and place them over the cheese.',
        'Season with a pinch of salt.',
        'Bake the pizza in the preheated oven until the crust is golden and the cheese is bubbly (about 10-15 minutes).',
        'Once out of the oven, scatter fresh basil leaves over the hot pizza.',
        'Slice and enjoy your delicious Margherita Pizza!'
    ],
    history: `
        The Margherita Pizza is named after Queen Margherita of Italy. It is said that in 1889, pizzaiolo Raffaele Esposito created this pizza to honor the queen during her visit to Naples. The simple colors of the pizza - red tomatoes, white mozzarella, and green basil - were meant to represent the Italian flag. The Margherita Pizza became a symbol of Italian cuisine and is cherished for its fresh and minimalistic flavors.
    `,
    nutritionalInfo: {
        servingSize: '1 slice (1/8 of pizza)',
        calories: 250,
        totalFat: '12g',
        saturatedFat: '6g',
        cholesterol: '25mg',
        sodium: '450mg',
        totalCarbohydrates: '28g',
        dietaryFiber: '2g',
        sugars: '2g',
        protein: '10g',
    }
};


export default function Page() {
    const params = useParams();
    const id = parseInt(params.id as string);
    return (
        <div className='space-y-8 p-2'>
            <img className='rounded-xl w-11/12 max-h-[50vh] object-cover mx-auto' src={`https://source.unsplash.com/random/?${foodItems[id].title}`} alt="" />
            <h1 className="text-2xl text-center font-bold">{foodItems[id].title}</h1>
            <p className='text-center font-semibold'>{foodItems[id].description}</p>
            <h2 className="text-2xl text-center font-bold">History</h2>
            <p className='text-sm'>{data.history}</p>
            <h2 className="text-2xl text-center font-bold">Ingredients</h2>
            <ul className=' text-center grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
                {data.ingredients.map((item, i) => {
                    return (
                        <li className='p-2 rounded-md' key={i}>
                            <div>
                                <img className='mx-auto rounded-md h-36 w-full object-cover' src={`https://source.unsplash.com/random/?${item}`} alt="" />
                                {item}
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
            <h2 className="text-2xl text-center font-bold">Instructions</h2>
            <ol className='list-decimal pl-6'>
                {data.instructions.map((item, i) => {
                    return (
                        <li key={i}> {item}</li>
                    )
                }
                )}
            </ol>
            <h2 className="text-2xl text-center font-bold">Nutritional Info</h2>
            <table className=''>
                <tbody>
                    <tr className='bg-slate-50'>
                        <td className='p-2'>Serving Size</td>
                        <td className='p-2'>{data.nutritionalInfo.servingSize}</td>
                    </tr>
                    <tr>
                        <td className='p-2'>Calories</td>
                        <td className='p-2'>{data.nutritionalInfo.calories}</td>
                    </tr>
                    <tr className='bg-slate-50'>
                        <td className='p-2'>Total Fat</td>
                        <td className='p-2'>{data.nutritionalInfo.totalFat}</td>
                    </tr>
                    <tr>
                        <td className='p-2'>Saturated Fat</td>
                        <td className='p-2'>{data.nutritionalInfo.saturatedFat}</td>
                    </tr>
                    <tr className='bg-slate-50'>
                        <td className='p-2'>Cholesterol</td>
                        <td className='p-2'>{data.nutritionalInfo.cholesterol}</td>
                    </tr>
                    <tr>
                        <td className='p-2'>Sodium</td>
                        <td className='p-2'>{data.nutritionalInfo.sodium}</td>
                    </tr>
                    <tr className='bg-slate-50'>
                        <td className='p-2'>Total Carbohydrates</td>
                        <td className='p-2'>{data.nutritionalInfo.totalCarbohydrates}</td>
                    </tr>
                    <tr>
                        <td className='p-2'>Dietary Fiber</td>
                        <td className='p-2'>{data.nutritionalInfo.dietaryFiber}</td>
                    </tr>
                    <tr className='bg-slate-50'>
                        <td className='p-2'>Sugars</td>
                        <td className='p-2'>{data.nutritionalInfo.sugars}</td>
                    </tr>
                    <tr>
                        <td className='p-2'>Protein</td>
                        <td className='p-2'>{data.nutritionalInfo.protein}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}