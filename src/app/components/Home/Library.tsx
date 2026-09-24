import React from 'react';
import type { WorkoutTypeProps } from '@/types/WorkoutTypeProps';
import LibraryCard from './LibraryCard';

const getAllData = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Library = async () => {
    const workout :WorkoutTypeProps[] = await getAllData();
    return (
        <>
        
        <div className='container mx-auto my-18'>
        <h1 className='text-4xl font-semibold uppercase mb-2'>The Library</h1>
        <p className='mb-5 font-semibold text-gray-400'>Twelve lifts covering every major muscle group.</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {workout.map((workout)=>(<LibraryCard workout={workout} key={workout.id}/>))}
            </div>
        </div>
        </>
    );
};

export default Library;