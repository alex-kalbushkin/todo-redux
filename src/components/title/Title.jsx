import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({title}) => (
  <div className='title-wrapper'>
    <h1 className='title'>{title}</h1>
  </div>
  
);

Title.propTypes = {
  title: PropTypes.string,
}

Title.defaultProps = {
  title: 'To-Do',
}

export default Title;