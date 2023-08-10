// Import necessary React components/icons
import { MdOutlineMail } from 'react-icons/md';

// Define the functional component named "Inbox"
export default function Inbox() {
    return (
        // Container div for the subscription form with styling classes
        <div className="bg-orange-300 pt-16 rounded-lg p-2 space-y-4">
            {/* Heading */}
            <h2 className='text-2xl font-bold text-center'>Deliciousness to your inbox</h2>

            {/* Description */}
            <p className='text-center'>Enjoy weekly handpicked recipes and recommendations</p>

            {/* Email input field */}
            <div className="flex p-2 bg-white rounded-md">
                <MdOutlineMail className='text-2xl' />
                <input className='pl-4 outline-none' type="text" placeholder="Enter your email" />
            </div>

            {/* Subscription button */}
            <button className='block bg-orange-500 py-2 px-12 mx-auto rounded-md'>Join</button>
        </div>
    );
}
