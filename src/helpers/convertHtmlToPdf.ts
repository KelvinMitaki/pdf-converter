import * as Print from "expo-print";

export const convertHtmlToPdf = async (
  html: string,
  setURI: (uri: string) => void
) => {
  const options = {
    html: html,
    width: 612, // US Letter paper width with 72 PPI
    height: 792, // US Letter paper height with 72 PPI
    base64: false, // Set to true if you want to include the base64 encoded string of the PDF in the returned object
  };

  const pdf = await Print.printToFileAsync(options);
  console.log(pdf.uri); // URI of the printed PDF file
  setURI(pdf.uri);
  console.log(pdf.numberOfPages); // Number of pages in the PDF file

  // If base64 option is true
  console.log(pdf.base64); // Base64 encoded string of the PDF file
};
