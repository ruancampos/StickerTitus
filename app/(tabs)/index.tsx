import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about">
        Go to About screen
      </Link>
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
