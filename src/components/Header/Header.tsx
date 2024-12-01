import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsIcon } from '../../assets/icons';

export const Header = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.backgroundImage}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.iconContainer}>
            <SettingsIcon color="white" />
          </View>
        </View>
      </SafeAreaView>
    </View>
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
    height: 100 + (StatusBar.currentHeight || 0),
    backgroundColor: '#B81D24',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
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
