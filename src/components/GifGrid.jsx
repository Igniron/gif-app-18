import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs (category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h4>Loading...</h4>)
            }
            <div className="card-grid">
                {
                    images.map((image) =>(
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

export
{
    GifGrid
} 