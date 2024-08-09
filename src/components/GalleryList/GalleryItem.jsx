
import './GalleryList.css';


function GalleryItem ({img, fetchImages}) {

    return (
            <li className= "singleItem" data-testid="galleryItem">
                <h3>{img.title}</h3>
                <img className="image" src={img.url}/>
                <p>{img.description}</p>
                <span className="buttons">
                    <button data-testid="toggle">description/image</button>
                    <button data-testid="like">{img.likes} like</button>
                </span>
            </li>
    )
}

export default GalleryItem;