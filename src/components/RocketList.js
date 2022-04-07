import React from 'react';
import Proptypes from 'prop-types';

const RocketList = (props) => {
  const { rocketProps } = props;
  return (
    <li key={rocketProps.id}>
      <p>{rocketProps.rocket_name}</p>
      <p>{rocketProps.description}</p>
      <img
        src={rocketProps.flickr_images}
        alt="rocket images"
        className="rocketImg"
      />
    </li>
  );
};

RocketList.propTypes = {
  rocketProps: Proptypes.shape({
    id: Proptypes.number,
    rocket_name: Proptypes.node,
    description: Proptypes.string,
    /* eslint-disable*/
    flickr_images: Proptypes.array,
    /* eslint-enable */
  }).isRequired,
};

export default RocketList;
