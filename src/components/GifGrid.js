import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => { setImages(imgs) })
    }, [category])


    return (
        <>
            <div className="card-grid-container">
                <h3 className="image-title">{category}</h3>

                <div className="card-grid">

                    {

                        images.map(img => (

                            <GifGridItem key={img.id} {...img} />

                        ))

                    }

                </div>
            </div>
        </>
    )
}
