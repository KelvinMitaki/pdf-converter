import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import axios from "axios";

export const docxToPDF = async ({
  setIsLoading,
}: {
  setIsLoading: (isLoading: boolean) => void;
}) => {
  try {
    const document = await DocumentPicker.getDocumentAsync({
      type: [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ],
    });

    if (document.type === "success") {
      const docxContent = await FileSystem.readAsStringAsync(document.uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      setIsLoading(true);

      const { data } = await axios.post(
        "https://aa5e-197-237-150-151.ngrok-free.app/api/hello",
        { file: docxContent }
      );

      setIsLoading(false);

      const fileUri = `${FileSystem.documentDirectory}/test.pdf`;

      await FileSystem.writeAsStringAsync(fileUri, data.data, {
        encoding: FileSystem.EncodingType.Base64,
      });

      console.log(data.data);

      await Sharing.shareAsync(fileUri);

      return fileUri;
    }
  } catch (error) {
    console.error(error);
  }
};
