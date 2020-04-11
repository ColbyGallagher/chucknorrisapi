import React from 'react'

const Card = ({ id, url, value }) => {
    return (
        <div className ='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <h2>{value}</h2>
                <p>{}</p>
            </div>
        </div>
    )
}

export default Card;