import {
  StyleSheet,
} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 10,
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
    width: 135,
    height: 135,
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  table: {
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#e4e4e4",
  },
  tableCol: {
    flex: 1,
    padding: 8,
  },
  tableColLeft: {
    flex: 0.2,
  },
  tableColRight: {
    flex: 0.8,
  },
  tableTitle: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "bold",
  },
  tableParagraph: {
    fontSize: 12,
    textAlign: "left",
  },
  pageFooter: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    flex: 0.2
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  pageFooterText: {
    fontSize: 12,
    color: "grey",
  },
  contentContainer: {
    flex: 0.8
  },
});
