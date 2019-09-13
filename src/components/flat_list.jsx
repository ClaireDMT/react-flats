import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          key={flat.lat}
          selectFlat={props.selectFlat}
          index={index}
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          lat={flat.lat}
          lng={flat.lng}
        />
      );
    });
  };

  return (
    <div className="flats-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
