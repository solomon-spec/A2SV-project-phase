import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleFilter } from './taskSlice';

const FilterButton = () => {
  const filter = useSelector((state: RootState) => state.task.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggleFilter())}
        className="bg-slate-100 rounded-full block mx-auto shadow-md text-black px-4 py-2 m-8 hover:bg-slate-200 hover:scale-105 transition duration-300"      >
        {filter ? 'Show All Tasks' : 'Show Completed Tasks'}
      </button>
    </div>
  );
};

export default FilterButton;
