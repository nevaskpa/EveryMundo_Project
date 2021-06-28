import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

function ExportCSV({ data }) {
  const [exportData, setExportData] = useState([]);

  useEffect(() => {
    setExportData(data);
  }, [data]);

  const getCsvData = () => {
    const csvData = [
      [
        "Amount",
        "Country",
        "Currency",
        "Show Cents",
        "Position",
        "Format",
        "Delimiter",
      ],
    ];
    let i;
    for (i = 0; i < exportData.length; i += 1) {
      csvData.push([
        `${exportData[i].amount}`,
        `${exportData[i].country}`,
        `${exportData[i].currency}`,
        `${exportData[i].showCents}`,
        `${exportData[i].position}`,
        `${exportData[i].format}`,
        `${exportData[i].delimiter}`,
      ]);
    }
    return csvData;
  };

  return (
    <div>
      <CSVLink filename="Settings.csv" data={getCsvData()}>
        Click here to download!
      </CSVLink>
    </div>
  );
}

export default ExportCSV;
