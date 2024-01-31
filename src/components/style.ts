import {
  StyleSheet,
} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20
  },
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row'
  },
  box: {
    width: '25%',
    height: 60,
    backgroundColor: 'lightgray',
    margin: 2
  },
  day: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  }
});
