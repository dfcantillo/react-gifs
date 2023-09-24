import { CardGifs } from "./CardGifs";
import { Gif } from '../interfaces/gifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { LoadingMessage } from "./LoadingMessage";

export const GifGrid: React.FC<{ category: string }> = ({ category }) => {

//Mi primer custom hook 
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <hr />
            <div className="alert alert-primary" role="alert">
                <h2><strong>{category}</strong> </h2>
            </div>
            <LoadingMessage isLoading={isLoading}/>
          
            <hr />
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {gifs.map((gif: Gif) => (
                    <CardGifs data={gif} key={gif.id} />
                ))}
            </div>

        </>

    )
}
