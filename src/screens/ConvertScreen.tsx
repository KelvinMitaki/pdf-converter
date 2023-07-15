import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { docxToPDF } from "../helpers/docxToPDF";

export const ConvertScreen = ({}: {}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [uri, setUri] = React.useState<string | null>(null);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        loading={isLoading}
        disabled={isLoading}
        onPress={async () => {
          const pdfURI = await docxToPDF({ setIsLoading });
          if (pdfURI) {
            setUri(pdfURI);
          }
        }}
      >
        {isLoading ? "converting" : "convert"}
      </Button>
      {/* {uri && <PdfReader source={{ uri }} />} */}
    </View>
  );
};
