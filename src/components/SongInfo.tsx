import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Track} from 'react-native-track-player';

type songInfoProps = PropsWithChildren<{
  track: Track | null | undefined;
}>;

export default function SongInfo({track}: songInfoProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}> {track?.title} . {track?.album}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});
