import { View, Text } from "react-native";
import PdfReader from "rn-pdf-reader-js";

export const PDFScreen = ({ uri }: { uri: string | null }) =>
  uri ? (
    <PdfReader source={{ uri }} />
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PDF Screen</Text>
    </View>
  );
