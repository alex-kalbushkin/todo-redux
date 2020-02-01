import React from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const BTN_FILTER = [
  {
    text: 'All',
    id: 'all',
  }, 
  {
    text: 'Active',
    id: 'active',
  }, 
  {
    text: 'Completed',
    id: 'completed',
  }
];

const Footer = ({amount, filter}) => (
  <div className='footer'>
    <span className='amount'>{`${amount} Tasks left`}</span>
    <div className='btn-group'>
      {BTN_FILTER.map(({text, id}) => (
        <button key={id} className={id === filter ? 'btn-active' : 'btn-filter'}>
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTyper = {
  amount: PropTypes.number,
  filter: PropTypes.string,
}

export default Footer;
