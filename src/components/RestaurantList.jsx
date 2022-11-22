import {useEffect} from 'react';

const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return <div>Restaurant List</div>;
};

export default RestaurantList;
