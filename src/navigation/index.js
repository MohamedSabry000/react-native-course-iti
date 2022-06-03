import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen, MovieScreen} from '../screens';
import {COLORS} from '../theme';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SearchScreen"
        screenOptions={{
          contentStyle: {
            backgroundColor: COLORS.oxfordBlue,
          },
        }}>
        <RootStack.Screen
          name={'MovieScreen'}
          component={MovieScreen}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.spaceCadet,
              // for Android
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerBackTitleVisible: false,
            headerTintColor: COLORS.sun,
          }}
        />
        <RootStack.Screen
          name={'SearchScreen'}
          component={SearchScreen}
          options={{
            header: () => null,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
