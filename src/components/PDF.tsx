import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './style';
const data = {
  Monday: 12,
  Tuesday: 6,
  Wednesday: 12,
  Thursday: 6,
  Friday: 12,
  Saturday: 4,
  Sunday: 16
};

const columns = 4;
const rowsPerPage = 9; 

const calculateRows = (count: number) => Math.ceil(count / columns);

function generatePDF() {
  const mealData = Object.entries(data);
  const pages: JSX.Element[] = [];

  let currentPageRows: number = 0;
  let currentPageContent: JSX.Element[] = [];

  mealData.forEach(([day, count]) => {
    const dayRows = calculateRows(count);
    const dayContent: JSX.Element[] = [];

    for (let i = 0; i < dayRows; i++) {
      const rowIndex = i + 1;
      const rowContent: JSX.Element[] = [];

      for (let j = 0; j < columns; j++) {
        const mealIndex = i * columns + j;
        const mealKey = `${day}-${mealIndex}`;

        if (mealIndex < count) {
          rowContent.push(<View key={mealKey} style={styles.box} />);
        } else {
          rowContent.push(<View key={mealKey} style={{ width: '25%' }} />);
        }
      }

      dayContent.push(
        <View key={`row-${rowIndex}`} style={styles.row}>
          {rowContent}
        </View>
      );
    }

    if (currentPageRows + dayRows <= rowsPerPage) {
      currentPageContent.push(
        <View key={day} style={styles.container}>
          <Text style={styles.day}>{day}</Text>
          {dayContent}
        </View>
      );
      currentPageRows += dayRows;
    } else {
      pages.push(
        <Page key={`page-${pages.length + 1}`} size="A4" style={styles.page}>
          {currentPageContent}
        </Page>
      );
      currentPageContent = [
        <View key={day} style={styles.container}>
          <Text style={styles.day}>{day}</Text>
          {dayContent}
        </View>
      ];
      currentPageRows = dayRows;
    }
  });

  if (currentPageContent.length > 0) {
    pages.push(
      <Page key={`page-${pages.length + 1}`} size="A4" style={styles.page}>
        {currentPageContent}
      </Page>
    );
  }

  return (
    <Document>
      {pages}
    </Document>
  );
}

export default generatePDF;
