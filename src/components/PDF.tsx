import {
  Document,
  Text,
  Page,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import food from "../food.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  parragraph: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
    margin: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  box: {
    border: "1px solid grey",
    width: 150,
    height: 200,
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  table: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
  },
  tableCol: {
    flex: 1,
    padding: 8,
  },
  tableColLeft: {
    flex: 0.3,
  },
  tableColRight: {
    flex: 0.7, 
  },
  tableTitle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  tableParagraph: {
    fontSize: 12,
    textAlign: 'left',
  },
});

function generatePDF() {
  const numPages = 100;
  const pages = Array.from({ length: numPages }, (_, index) => index + 1);

  return (
    <Document>
      {pages.map((pageNumber) => (
        <Page key={pageNumber} style={styles.page}>
          <Text style={styles.title}>Hello world</Text>
          <View style={styles.section}>
            {[...Array(3)].map((_, index) => (
              <View key={index} style={styles.box}>
                <Image src={food} />
                <Text style={styles.parragraph}>Lorem ipsum dolor sit amet.</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            {[...Array(3)].map((_, index) => (
              <View key={index} style={styles.box}>
                <Image src={food} />
                <Text style={styles.parragraph}>Lorem ipsum dolor sit amet.</Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            {[...Array(3)].map((_, index) => (
              <View key={index} style={styles.box}>
                <Image src={food} />
                <Text style={styles.parragraph}>Lorem ipsum dolor sit amet.</Text>
              </View>
            ))}
          </View>
          <View style={styles.pageNumber}>
            <Text render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
          </View>
        </Page>
      ))}

      {pages.map((pageNumber) => (
        <Page key={pageNumber} style={styles.page}>
          <Text style={styles.title}>Food Information</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableTitle}>Speise</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableTitle}>Information</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableParagraph}>Kostform</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableParagraph}>Alkohol</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableParagraph}>Zataten</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, pariatur.</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableParagraph}>Zataten</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, pariatur.</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableParagraph}>Zataten</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, pariatur.</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.tableColLeft]}>
                <Text style={styles.tableParagraph}>Zubereitunung</Text>
              </View>
              <View style={[styles.tableCol, styles.tableColRight]}>
                <Text style={styles.tableParagraph}>Verzehrfertig</Text>
              </View>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
}

export default generatePDF;
