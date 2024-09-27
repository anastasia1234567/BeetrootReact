import React from 'react';

export default function CatBlock({ id, name, photoUrl }) {
    return (
        <div className='list-item'>
            {id}
            {name}
            {photoUrl}
        </div>
    )
}