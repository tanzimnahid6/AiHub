import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

import TableRow from "./TableRow";

import MyModal from "./MyModal";
import { useState } from "react";
import { getPublications } from "../../data/publication";
const publications = getPublications();
const ResearchTable = () => {
  const [pdfId, setPdfId] = useState(null);
  const handleDownloadPdf = (id) => {
    setPdfId(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra text-[16px]">
        {/* head */}
        <thead>
          <tr className="bg-gray-300 text-center">
            <th>#</th>
            <th>TITLE</th>
        
            <th>YEAR</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((p) => (
            <TableRow
              key={p.id}
              publication={p}
              handleDownloadPdf={handleDownloadPdf}
            ></TableRow>
          ))}
        </tbody>
      </table>

      {pdfId && (
        <embed
          src={`./${pdfId}.pdf`}
          type="application/pdf"
          className="invisible"
        ></embed>
      )}
    </div>
  );
};

export default ResearchTable;
