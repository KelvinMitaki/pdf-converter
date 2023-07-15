import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

export const RenderCamera = ({
  type,
  setType,
  cameraRef,
  __closeCamera,
  __takePicture,
}: {
  type: CameraType;
  cameraRef: React.RefObject<Camera>;
  __closeCamera: () => void;
  __takePicture: () => Promise<void>;
  setType: (type: CameraType) => void;
}) => {
  return (
    <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        >
          <TouchableOpacity onPress={__closeCamera}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              X
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
          }}
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
            {" "}
            Flip{" "}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            flex: 1,
            width: "100%",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              flex: 1,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={__takePicture}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: "#fff",
              }}
            />
          </View>
        </View>
      </View>
    </Camera>
  );
};

/**
 * 
 * export const HomeScreen = () => {
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
    <View
      style={{
        flex: 1,
      }}
    >
      {startOver ? (
        <Button onPress={() => setStartOver(false)} mode="contained">
          Take picture
        </Button>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
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
 */
