import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './style';

const data = {
  Monday: 12,
  Tuesday: 6,
  Wednesday: 24,
  Thursday: 6,
  Friday: 8,
  Saturday: 8,
  Sunday: 98
};

const columns = 4;
const rowsPerPage = 8; 

const calculateRows = (count: number) => Math.ceil(count / columns);

function generatePDF() {
  const mealData = Object.entries(data);
  const pages: JSX.Element[] = [];

  let currentPageRows: number = 0;
  let currentPageContent: JSX.Element[] = [];
  let currentPageNumber: number = 1; // เพิ่มตัวแปรเพื่อเก็บเลขหน้าปัจจุบัน

  mealData.forEach(([day, count]) => {
    const dayRows = calculateRows(count);
    let remainingRows: number = dayRows; // จำนวนแถวที่เหลือในวันนี้

    // เพิ่ม Text เพื่อแสดงวัน
    currentPageContent.push(
      <View key={`header-${day}`} style={styles.container}>
        <Text style={styles.day}>{day}</Text>
      </View>
    );

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

      // ตรวจสอบว่าหากการ์ดของวันนี้เต็มหน้าแล้วให้เริ่มหน้าใหม่
      if (currentPageRows + 1 > rowsPerPage) {
        // เพิ่ม footer ในหน้าที่เต็มหน้าแล้ว
        pages.push(
          <Page key={`page-${pages.length + 1}`} size="A4" style={styles.page}>
            {currentPageContent}
            {/* เพิ่ม footer */}
            <View style={styles.footer}>
              <Text>Footer line 1</Text>
              <Text>Footer line 2</Text>
              <Text>Footer line 3</Text>
              <Text>Footer line 4</Text>
              <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
              )} fixed />
            </View>
          </Page>
        );
        currentPageContent = [];
        currentPageRows = 0;
        currentPageNumber++; // เพิ่มเลขหน้า
      }

      currentPageContent.push(
        <View key={`${day}-row-${rowIndex}`} style={styles.row}>
          {rowContent}
        </View>
      );

      currentPageRows++;
      remainingRows--;

      // ตรวจสอบว่าหากหน้าปัจจุบันเต็มหน้าแล้วให้เริ่มหน้าใหม่
      if (currentPageRows === rowsPerPage && remainingRows > 0) {
        pages.push(
          <Page key={`page-${pages.length + 1}`} size="A4" style={styles.page}>
            <View style={styles.userData}>
              <Text>Piyapong Wongfai</Text>
              <Text style={styles.description}>Dining Program</Text>
              <Text style={styles.description}>Light Foods</Text>
            </View>
            <View style={styles.navbar}>
              <Text>Breakfast</Text>
              <Text>Lunch</Text>
              <Text>Afternoon</Text>
              <Text>Dessert</Text>
            </View>
            {currentPageContent}
            <View style={styles.footer}>
              <Text>Footer line 1</Text>
              <Text>Footer line 2</Text>
              <Text>Footer line 3</Text>
              <Text>Footer line 4</Text>
              <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
              )} fixed />
            </View>
          </Page>
        );
        currentPageContent = [];
        currentPageRows = 0;
        currentPageNumber++; // เพิ่มเลขหน้า
      }
    }
  });

  // เพิ่มหน้าสุดท้าย (หากมี)
  if (currentPageContent.length > 0) {
    pages.push(
      <Page key={`page-${pages.length + 1}`} size="A4" style={styles.page}>
        {currentPageContent}
        {/* เพิ่ม footer สำหรับหน้าสุดท้าย */}
        <View style={styles.footer}>
          <Text>Footer line 1</Text>
          <Text>Footer line 2</Text>
          <Text>Footer line 3</Text>
          <Text>Footer line 4</Text>
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
        </View>
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
