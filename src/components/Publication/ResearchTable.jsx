import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

import TableRow from "./TableRow";

import MyModal from "./MyModal";
import { useState } from "react";
import { getPublications } from "../../data/publication";
const publications = getPublications();
const ResearchTable = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
 

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra text-[16px]">
        {/* head */}
        <thead>
          <tr className="bg-gray-300">
            <th>#</th>
            <th>TITLE</th>
            <th>CITED BY</th>
            <th>YEAR</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((p) => (
            <TableRow
              key={p.id}
             
              publication={p}
             openModal={openModal}
            ></TableRow>
          ))}
        </tbody>
      </table>
      <MyModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      ></MyModal>
    </div>
  );
};

export default ResearchTable;
