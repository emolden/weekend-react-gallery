import GalleryItem from "./GalleryItem.jsx"
import './GalleryList.css';

function GalleryList ({images, fetchImages}) {

    return (
        <div data-testid="galleryList">
            <h1>Gallery List</h1>
            <ul className="galleryListOfItems">
                {images.map((img) => {
                    return (
                        <GalleryItem key={img.id} img={img} fetchImages={fetchImages}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default GalleryList