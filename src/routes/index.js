import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import Movie from '../views/Movie';
import UpcomingMovies from '../views/UpcomingMovies';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="UpcomingMovies">
      <Stack.Screen name="Cinemas" component={Cinemas} />
      <Stack.Screen name="CinemaDetails" component={CinemaDetails} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="UpcomingMovies" component={UpcomingMovies} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
