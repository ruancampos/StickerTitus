import { MaterialIcons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet } from "react-native"

type Props = {
    onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
    return(
        <View style={styles.CircleButtonContainer}>
        <Pressable onPress={onPress} style={styles.CircleButton}>
            <MaterialIcons name="add" size={38} color="#25292E" />
        </Pressable>
    </View>

    );
 
}

const styles = StyleSheet.create({
    CircleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderBlockColor: "#FFD33D",
        borderRadius: 42,
        padding: 3,
    },
    CircleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "#FFF",
    },
})