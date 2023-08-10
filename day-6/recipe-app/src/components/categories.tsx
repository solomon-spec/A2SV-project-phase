// Import React and any other necessary dependencies
import React from 'react';

// Define the interface for the component props
interface Props {
    title: string;
}

// Define the functional component named "categories" receiving props of type "Props"
export default function categories({ title }: Props) {

    // Return JSX content for the component
    return (
        <div>
            {/* Display an image with the specified title as a source */}
            <img className='w-[30vw] h-[30vw] rounded-full object-cover' src={`https://source.unsplash.com/random/${title}`} alt={`Random image related to ${title}`} />

            {/* Display the title in a centered text */}
            <span className='block text-center'>{title}</span>
        </div>
    );
}
