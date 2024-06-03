import React from 'react';
import { ImageBackground, Text, StyleSheet, View, StatusBar } from 'react-native';
import HeaderImage from '../../assets/img/header.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Header = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
    <ImageBackground source={HeaderImage} style={styles.backgroundImage}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.iconContainer}>
            <Icon name="settings-outline" color="red" size={24} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 150 + (StatusBar.currentHeight || 0),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    borderColor: 'red',
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  iconContainer: {
    padding: 10,
  },
});

export default Header;
