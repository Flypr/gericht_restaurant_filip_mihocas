import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{marginBottom: '.5rem'}}>
    <p className="p__cormorant" style={{
      lineHeight: '1.3',
      marginBottom: '.5rem'
    }}>{ title }</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
