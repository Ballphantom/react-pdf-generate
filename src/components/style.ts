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
    backgroundColor: 'white',
    margin: 2,
    borderWidth: '1px solid black',
    boxShadow: '2px 2px 2px 2px #888888',
    borderRadius: 5,
  },
  day: {
    marginBottom: 10,
    fontSize: 12,
    backgroundColor: 'lightgray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 2,
    width: '100%'
  },
  text: {
    fontSize: 12,
    padding: 5,
    textAlign: 'center',
    color: 'black'
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 12,
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 12,
    color: 'grey'
  },
  navbar: {
    fontSize: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
  },
  userData: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 12,
  },
  description: {
    fontSize: 10,
    color: 'grey',
    marginTop: 5,
  },
});
