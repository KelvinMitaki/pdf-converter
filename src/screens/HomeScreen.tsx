import React, { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { Button } from "react-native-paper";
import { RenderImage } from "../components/RenderImage";
import { RenderCamera } from "../components/RenderCamera";
import Icon from "react-native-vector-icons/FontAwesome";

export const HomeScreen = ({
  uri,
  setURI,
}: {
  uri: string | null;
  setURI: (uri: string | null) => void;
}) => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] =
    useState<CameraCapturedPicture | null>(null);
  const [startOver, setStartOver] = useState<boolean>(true);
  const [type, setType] = useState(CameraType.back);

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const __closeCamera = () => {
    setStartOver(true);
  };

  const __takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __savePhoto = async () => {};

  return (
    <View style={{ flex: 1 }}>
      {startOver ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            onPress={() => setStartOver(false)}
            mode="contained"
            icon={(props) => <Icon {...props} name="camera" />}
          >
            Take picture
          </Button>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          {previewVisible ? (
            <RenderImage
              capturedImage={capturedImage}
              setPreviewVisible={setPreviewVisible}
              __savePhoto={__savePhoto}
            />
          ) : (
            <RenderCamera
              type={type}
              setType={setType}
              cameraRef={cameraRef}
              __closeCamera={__closeCamera}
              __takePicture={__takePicture}
            />
          )}
        </View>
      )}
    </View>
  );
};
