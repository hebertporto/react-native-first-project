// CTRL + R - Atualizar - Refresh o emulador

// import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// create a Component
const App = () => (
    <View>
      <Header headerText={'Albums APP'} />
      <AlbumList />
    </View>
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
