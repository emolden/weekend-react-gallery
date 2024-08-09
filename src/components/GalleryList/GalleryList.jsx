import GalleryItem from "./GalleryItem.jsx"
import './GalleryList.css';

function GalleryList () {

    return (
        <div data-testid="galleryList">
            <h1>Gallery List</h1>
            <GalleryItem/>
        </div>
    )
}

export default GalleryList