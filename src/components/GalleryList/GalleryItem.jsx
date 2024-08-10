
import './GalleryList.css';
import axios from 'axios';


function GalleryItem ({img, fetchImages}) {

    const addLike = () => {
        console.log('in addLike function');
        axios({
            method: 'PUT',
            url: `/api/gallery/like/${img.id}`
        })
        .then((response) => {
            fetchImages();
        })
        .catch((error) => {
            console.log('Error in the response from the server PUT route: ', error);
        })
    }

    return (
            <li className= "singleItem" data-testid="galleryItem">
                <h3>{img.title}</h3>
                <img className="image" src={img.url}/>
                <p>{img.description}</p>
                <span className="buttons">
                    <button data-testid="toggle">description/image</button>
                    <button data-testid="like" onClick={addLike}>{img.likes} Likes</button>
                </span>
            </li>
    )
}

export default GalleryItem;