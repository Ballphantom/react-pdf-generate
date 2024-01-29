import { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./components/PDF";

function App() {
  const [generatePDF, setGeneratePDF] = useState(false);

  const handleBuildPlanClick = () => {
    setGeneratePDF(true);
  };

  return (
    <div className="app-container">
      {!generatePDF && (
        <button className="build-pdf" onClick={handleBuildPlanClick}>
          Build your Plan!!
        </button>
      )}

      {generatePDF && (
        <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
          {({ loading }) =>
            loading ? (
              <button className="loading-btn">Loading Document ...</button>
            ) : (
              <button className="download-btn">Download now!</button>
            )
          }
        </PDFDownloadLink>
      )}

      {generatePDF && (
        <PDFViewer width={600} height={821}>
          <PDF />
        </PDFViewer>
      )}
    </div>
  );
}

export default App;