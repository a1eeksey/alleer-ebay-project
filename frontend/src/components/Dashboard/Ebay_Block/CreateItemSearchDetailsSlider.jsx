import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CreateItemSearchDetailsSlider( {mainPicture, additionalPicturesArray} ) {
    let allPictures = []

    if (additionalPicturesArray != 'N/A') {
        allPictures = [mainPicture, ...additionalPicturesArray]
    } else {
        allPictures = [mainPicture]
    }

    return (
        <div>
            {allPictures.length > 1 ? (
                <Carousel slide={false} data-bs-theme="dark">
                    {allPictures.map((picture, index) => (
                        <Carousel.Item key={index} interval={999999}>
                            <img
                                src={picture}
                                alt={`Slide ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            ) : (
                    <img
                        src={allPictures[0]}
                        alt="Single slide"
                    />
            )}
        </div>
    );
}

export default CreateItemSearchDetailsSlider;
