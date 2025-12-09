import { StyleSheet, View } from 'react-native';
import { GodotView } from 'react-native-godot';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <GodotView
        style={styles.godotView}
        pck="BUILD-1.pck"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  godotView: {
    flex: 1,
  },
});
