import {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from '@mui/material';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({
  loadRestaurants,
  restaurants,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {loading && <CircularProgress />}
      {loadError && (
        <Alert severity={'error'}>Restaurants could not be loaded.</Alert>
      )}
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
  loadError: state.restaurants.loadError,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
