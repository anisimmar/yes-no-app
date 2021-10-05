import React, {useState} from 'react';

const Answer = () => {



    const number = Math.round(Math.random());
    const arr = ['Да', 'Нет']
    const answer = arr[number];

    return (
        <>
            <h1>{answer}</h1>
        </>
    )
}

export default Answer

