import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {setupPlayer, addTracks} from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTracks();
    }

    setIsPlayerReady(isSetup);
  }
  useEffect(() => {
    setup();
  }, []);
  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
