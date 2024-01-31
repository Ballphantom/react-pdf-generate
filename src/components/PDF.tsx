import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './style';

const mealData = {
  Monday: [
    { meal: 'Breakfast', foods: ['Food1', 'Food2', 'Food3'] },
    { meal: 'Lunch', foods: ['Food1', 'Food2', 'Food3'] },
    { meal: 'Dinner', foods: ['Food1', 'Food2'] },
    { meal: 'Dessert', foods: [] }
  ],
  Tuesday: [
    { meal: 'Breakfast', foods: ['Food1', 'Food2', 'Food3'] },
    { meal: 'Lunch', foods: ['Food1', 'Food2', 'Food3'] },
    { meal: 'Dinner', foods: ['Food1', 'Food2', 'Food3', 'Food4', 'Food5'] },
    { meal: 'Dessert', foods: [] }
  ],
};

const navbarItems = ['Breakfast', 'Lunch', 'Dinner', 'Dessert'];

function generatePDF() {
  const pages: JSX.Element[] = [];

  Object.entries(mealData).forEach(([day, meals]) => {
    let maxCount = 0;
    meals.forEach(meal => {
      if (meal.foods.length > maxCount) {
        maxCount = meal.foods.length;
      }
    });

    let mealRows: JSX.Element[][] = [];
    let currentPageRows = 0; 
    let currentPage: JSX.Element | null = null;

    for (let i = 0; i < maxCount; i++) {
      let row: JSX.Element[] = [];
      navbarItems.forEach((item) => {
        const meal = meals.find((m) => m.meal === item);
        if (meal) {
          const foods = meal.foods;
          if (foods.length > i) {
            row.push(
              <View key={`${day}-${item}-${i}`} style={styles.box}>
                <Text style={styles.boxText}>{foods[i]}</Text>
              </View>
            );
          } else {
            row.push(<View key={`${day}-${item}-${i}`} style={{ width: '25%' }} />);
          }
        }
      });
      mealRows.push(row);
      currentPageRows++;

      if (currentPageRows === 9 || i === maxCount - 1) {
        currentPage = (
          <Page key={`page-${day}-${i}`} size="A4" style={styles.page}>
            <View style={styles.userData}>
              <Text>Piyapong Wongfai</Text>
              <Text style={styles.description}>Dining Program</Text>
              <Text style={styles.description}>Light Foods</Text>
            </View>
            <View style={styles.navbar}>
              {navbarItems.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </View>
            <View style={styles.container}>
              <Text style={styles.day}>{day}</Text>
              {mealRows.map((row, index) => (
                <View key={`row-${index}`} style={styles.row}>
                  {row}
                </View>
              ))}
            </View>
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
        pages.push(currentPage);
        currentPageRows = 0;
        mealRows = [];
      }
    }
  });

  return (
    <Document>
      {pages}
    </Document>
  );
}

export default generatePDF;
