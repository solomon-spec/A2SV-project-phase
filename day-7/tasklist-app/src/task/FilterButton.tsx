import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleFilter } from './taskSlice';

const FilterButton = () => {
  // Access the current filter value from the Redux store
  const filter = useSelector((state: RootState) => state.task.filter);

  // Access the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      {/* Button to toggle the filter */}
      <button
        onClick={() => dispatch(toggleFilter())} // Dispatch the toggleFilter action
        className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-4 py-2 m-8 hover:bg-slate-200 hover:scale-105 transition duration-300"
      >
        {/* Display appropriate text based on the current filter value */}
        {filter ? 'Show All Tasks' : 'Show Completed Tasks'}
      </button>
    </div>
  );
};

export default FilterButton;
