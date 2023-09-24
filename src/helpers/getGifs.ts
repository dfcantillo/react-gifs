import { Gif } from '../interfaces/gifs';

export const getGifs = async (category:string): Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vj6hC2HMuW7o8955gEDpwLWD5SWS14n9&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs: Gif[] = data.map((img:any) => ({
        id: img.id,
        title: img.title,
        image: img.images.downsized_medium.url
    }));
    return gifs;
    
}