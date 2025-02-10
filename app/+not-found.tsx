import { StyleSheet, Text, View } from "react-native";
import { Link, Stack } from 'expo-router';
import React from "react"

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{title: "Oops! Not Found"}} />
        <View style={styles.conteiner}>
         <Link href="/about">
             Go to About screen
         </Link>
        </View>
    </>
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
