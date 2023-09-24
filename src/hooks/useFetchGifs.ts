import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { Gif } from '../interfaces/gifs';

export const useFetchGifs = (category: string) => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        setIsLoading(true)

        getGifs(category).then((data) => {
            setGifs(data)
            setIsLoading(false)


        });
    }, [category])

    return {
        gifs: gifs,
        isLoading
    }
}
