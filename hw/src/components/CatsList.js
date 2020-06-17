import React from 'react';
import CatBlock from './CatBlock';

export default function CatsList() {
    const cats = [
        {
            id: 1,
            name: 'Cat1',
            photoUrl: 'https://bit.ly/37gsein'
        },
        {
            id: 2,
            name: 'Cat2',
            photoUrl: 'https://bit.ly/37gsein'
        },
        {
            id: 3,
            name: 'Cat3',
            photoUrl: 'https://bit.ly/37gsein'
        }
    ];

    return (
        <div className='list'>
            {cats.map((id, name, photoUrl, i) => (
                <CatBlock key={i} id={id} name={name} photoUrl={photoUrl} />
            ))}
        </div>
    );
}