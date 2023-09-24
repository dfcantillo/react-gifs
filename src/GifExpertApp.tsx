import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { AddCategory } from "./components/AddCategory";
// import { CardGifs } from "./components/CardGifs";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One piece'])

    const handleAddCategory = (value: string) => {
        // setCategories(cat => [...cat,'Dragon Ball GT'])
        const exists = categories.find(x => x.toUpperCase() === value.toUpperCase());
        if (!exists) setCategories([value, ...categories])
    }

    return (
        <>
            <Navbar title="GifExpertApp Diego Cantillo D" />
            <div className="container mt-2">
                {/* input */}
                <AddCategory onNewCategory={(event: string) => handleAddCategory(event)} />
                {/* cards */}
                <div>
                    {categories.map(item => (
                        <GifGrid key={item} category={item} />
                    ))
                    }
                </div>
            </div>


        </>
    )
}
