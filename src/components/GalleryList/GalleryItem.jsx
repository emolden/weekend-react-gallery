
import './GalleryList.css';
import axios from 'axios';
import { useState } from 'react';


function GalleryItem ({img, fetchImages}) {

    const [imageDescription, setImageDescription] = useState('Image');
    const [imageDescriptionDisplay, setImageDescriptionDisplay] = useState(<img className="image" src={img.url}/>);

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

    const changeImageDescription = () => {
        if(imageDescription === 'Image') {
            setImageDescription('Description');
            setImageDescriptionDisplay(<p>{img.description}</p>)
        }
        else if (imageDescription === 'Description') {
            setImageDescription('Image');
            setImageDescriptionDisplay(<img className="image" src={img.url}/>)
        }
    }

    return (
            <li className= "singleItem" data-testid="galleryItem">
                <h3>{img.title}</h3>
                <div>
                    {imageDescriptionDisplay}
                </div>
                <span className="buttons">
                    <button data-testid="toggle" onClick={changeImageDescription}>description/image</button>
                    <button data-testid="like" onClick={addLike}>{img.likes} Likes</button>
                </span>
            </li>
    )
}

export default GalleryItem;