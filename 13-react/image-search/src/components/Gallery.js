import React from 'react';

// Functional components: good when you don't need state.
// Think of it as just the render method.
// No `this`.

// Access props by creating a parameter for them.
const Gallery = (props) => {
  return (
    <div>
      { props.images.map( (url) => (<img src={ url } key={ url } alt="Copyright Flickr" />) ) }
    </div>
  );
}

export default Gallery;
