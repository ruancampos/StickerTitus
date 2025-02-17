import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
};

export default function IconButton({icon, label, onPress }: Props) {
    return(
        <Pressable onPress={onPress} style={styles.iconButton}>
            <MaterialIcons name={icon} size={24} color="#FFF"/>
            <Text style={styles.iconButtonLabel}>
                {label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignContent: "center",
    },
    iconButtonLabel: {
        color: "#FFF",
        marginTop: 12,
    }
})