import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>Home screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#25292E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#FFF"
  }
});
