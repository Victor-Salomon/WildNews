// import React from 'react';
import PropTypes from 'prop-types';

// Cette fonction crée une Card pour un article
function Card({ image, title, url, description }) {
  return (
    <div>
      <img style={{ width: '100%' }} src={image} alt={title} />
      <div>
        <a className="title" href={url}>
          {title}
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

// Declaration des propTypes par défaut.
Card.defaultProps = {
  url: '',
  title: '',
  description: '',
  image: '',
};

// Declaration des propTypes
// Il faudra les passer en isRiquired et gérer les null
Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
