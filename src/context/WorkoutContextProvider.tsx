import React from 'react';

const getAll = async()=> {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}



const WorkoutContextProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default WorkoutContextProvider;