
import './GalleryList.css';


function GalleryItem () {

    return (
        <div data-testid="galleryItem">
            <span>
                <h3>Small Goat</h3>
                <img className="image" src="images/goat_small.jpg"/>
                <button data-testid="toggle">description/image</button>
                <button data-testid="like">like</button>
            </span>
            <span className= "singleItem">
                <h3>Stache Goat</h3>
                <img className="image" src="images/goat_stache.png"/>
                <span className="buttons">
                    <button data-testid="toggle"> description/image</button>
                    <button data-testid="like">like</button>
                </span>
            </span>
        </div>
    )
}

export default GalleryItem;