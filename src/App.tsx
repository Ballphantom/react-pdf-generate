import { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./components/PDF";

function App() {
  const [generatePDF, setGeneratePDF] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);

  const handleBuildPlanClick = () => {
    const startTime = performance.now(); 

    setGeneratePDF(true);

    setTimeout(() => {
      const endTime = performance.now();
      const timeElapsed = (endTime - startTime) / 1000; 
      setLoadingTime(timeElapsed);
    }, 1000); 
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

      {loadingTime > 0 && (
        <p>เวลาที่ใช้ในการ generate PDF: {loadingTime.toFixed(2)} วินาที</p>
      )}
    </div>
  );
}

export default App;
