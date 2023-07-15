import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { CameraCapturedPicture } from "expo-camera";

export const RenderImage = ({
  capturedImage,
  setPreviewVisible,
  __savePhoto,
}: {
  capturedImage: CameraCapturedPicture | null;
  setPreviewVisible: (isPreviewVisible: false) => void;
  __savePhoto: () => Promise<void>;
}) => {
  return (
    <ImageBackground
      source={{ uri: capturedImage?.uri }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: 15,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setPreviewVisible(false)}
            style={{
              width: 130,
              height: 40,
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              Re-take
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={__savePhoto}
            style={{
              width: 130,
              height: 40,

              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              save photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
