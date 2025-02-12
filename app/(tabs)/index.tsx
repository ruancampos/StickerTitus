import { StyleSheet, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.jpg");

export default function Index() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#25292E",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
  },
});
