// Import necessary React components/icons
import { AiOutlineRise } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

// Define the functional component named "Hero"
export default function Hero() {
    return (
        // Container div with styling classes
        <div className="rounded-lg overflow-hidden flex flex-col bg-slate-100 text-sm space-y-4 sm:flex-row">
            {/* Image section */}
            <img className="h-[50vh] w-full object-cover sm:h-[60vh] sm:w-[50%]" src="https://source.unsplash.com/random/?food" alt="" />

            {/* Text content section */}
            <div className="p-3 space-y-4 sm:w-[70%]">
                {/* Statistics about user satisfaction */}
                <p className="text-gray-500">
                    <AiOutlineRise className="inline-block font-extrabold text-xl" />
                    95% of our users loved our recipes
                </p>
                {/* Main heading */}
                <h1 className="text-2xl font-bold">Discover Culinary Excellence with</h1>

                {/* Introduction text */}
                <p>
                    Welcome to a world where flavors dance and ingredients harmonize to create culinary magic.
                    Kimsha is your ultimate destination for exquisite recipes, cooking inspiration, and gastronomic adventures.
                </p>

                {/* Icon for action */}
                <BsFillArrowRightCircleFill className="text-gray-500 text-xl hover:scale-105 hover:text-gray-600" />
            </div>
        </div>
    );
}
