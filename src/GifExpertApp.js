import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories,setCategories] = useState(['HunterxHunter']);

    return (

        <>
            <h2>Aplicacion de Gifs creada por Jonah</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>

                {
                    categories.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })

                }
            </ol>


        </>
    );
}

export default GifExpertApp;