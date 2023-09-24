import React from 'react'
import { Gif } from '../interfaces/gifs'

export const CardGifs: React.FC<{data: Gif}> = ( {data} ) => {
    return (
        <div className="col">
            <div  className="card" >
                <img src={data.image} className="card-img-top" alt={data.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        </div>
    )
}
