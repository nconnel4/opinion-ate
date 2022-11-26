import {useEffect} from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText, CircularProgress} from '@mui/material';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants, loading}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress />}
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            <ListItemText>{restaurant.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
