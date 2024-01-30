import { Document, Text, Page, Image, View } from "@react-pdf/renderer";
import food from "../food.png";
import { styles } from "./style";

function generatePDF() {
  const numCols = 4;
  const totalCards = 32;

  const data: { index: number }[][] = [];
  let cardsAdded = 0;

  for (let i = 0; i < Math.ceil(totalCards / numCols); i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      if (cardsAdded < totalCards) {
        row.push({ index: cardsAdded });
        cardsAdded++;
      }
    }
    data.push(row);
  }
  const pages = Math.ceil(data.length / 4);
  return (
    <Document>
      {Array.from({ length: pages }, (_, pageIndex) => {
        const startIdx = pageIndex * 4;
        const endIdx = Math.min(startIdx + 4, data.length); 
        return (
          <Page key={pageIndex + 1} style={styles.page}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Hello world</Text>
              {data.slice(startIdx, endIdx).map((row, rowIndex) => (
                <View key={rowIndex} style={styles.section}>
                  {row.map((colIndex) => (
                    <View
                      key={`${rowIndex}-${colIndex}`}
                      style={styles.box}
                    >
                      <Image src={food} />
                      <Text style={styles.parragraph}>
                        Lorem ipsum dolor sit amet.
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
            <View style={styles.pageFooter}>
              <View style={styles.footer}>
                <Text style={styles.pageFooterText}>Footer</Text>
              </View>
              <Text style={styles.pageFooterText}>
                {pageIndex +1}/{pages}
              </Text>
            </View>
          </Page>
        );
      })}
    </Document>
  );
}

export default generatePDF;
