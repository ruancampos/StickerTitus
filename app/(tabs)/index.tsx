import { View, StyleSheet } from "react-native";
import { useState } from "react"; // <-  é um hook do React para gerenciar estados em componentes funcionais.
import * as ImagePicker from "expo-image-picker"; // <- é uma biblioteca do Expo que permite selecionar imagens da galeria ou câmera do dispositivo.
import { type ImageSource } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
 
// imports dos componentes personalizados localizados na pasta components do projeto.
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
 
// 11° Versão //
//====================================================================//
const PlaceholderImage = require("@/assets/images/background-image.jpg"); // <- Carrega uma imagem local (image_dog.jpg) localizada na pasta assets/images
 
// export default function Index(){} => Define um componente funcional padrão exportado.
// OBS: As const gerenciam os estados
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoje] = useState<ImageSource | undefined>(
    undefined
  );
 
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
 
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };
 
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalChose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = () => {};
 
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
        {/* selectedImage={selectedImage}
        selectedImage= =>  selectedImage?: string; da Prop da página ImageViewer.tsx
        {selectedImage} =>  const [selectedImage, setSelectedImage] é o selectedImage da const dessa página.*/}
      </View>
 
      {/*abrindo um ternario = {showAppOptions ? <View /> : } => para ocultar esta view  */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerConatiner}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalChose}>
        <EmojiList onSelect={setPickedEmoje} onCloseModal={onModalChose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerConatiner: {
    flex: 1 / 3, // <- para usar 33% da tela.
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});