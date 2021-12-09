import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import Movie from '../views/Movie';
import UpcomingMovies from '../views/UpcomingMovies';
import UpcomingMovie from '../views/UpcomingMovie';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Upcoming Movies">
      <Stack.Screen name="Cinemas" component={Cinemas} />
      <Stack.Screen name="Cinema Details" component={CinemaDetails} />
      <Stack.Screen name="Movie" component={Movie} />
      <Stack.Screen name="Upcoming Movies" component={UpcomingMovies} />
      <Stack.Screen name="Upcoming Movie" component={UpcomingMovie} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
