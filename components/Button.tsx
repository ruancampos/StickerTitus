import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
  label: string;
  theme?: "primary"; //? optional
  onPress?: () => void;// vai recer a function
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 },
        ]}
      >
        <Pressable
            style={[styles.button, { backgroundColor: "#FFF" }]}
            onPress={onPress}
        >
            <FontAwesome
                name="picture-o"
                size={18}
                color={"#25292E"}
                style={styles.buttonIcon}
            />
          <Text style={[styles.buttonLabel, {color: "#25292E"}]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  }
});
