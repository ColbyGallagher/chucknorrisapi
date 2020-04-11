import React from 'react'
import Card from './Card'

const CardList = ({ joke }) => {
        return (<Card 
            key={joke.id}  
            id={joke.id} 
            url={joke.url} 
            value={joke.value}
            />
        );
    // return (
    // //     <div>
    // //         {cardComponent}
    // //     </div>
    // )
}

export default CardList;