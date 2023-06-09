// Lister.jsx

import { listDocuments } from "./actions";
import { useEffect, useState } from "react";

export default function Lister({ onDocumentClick }) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await listDocuments();
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      {documents &&
        documents.map(document => (
          <div key={document.id} className="flex flex-row pt-3 items-center gap-4">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
                fill="#FFF"
              />
            </svg>
            <div className="flex flex-col">
              <div className="font-normal font-r-reg text-[0.8125em] text-[#7C8187]">
                {/* db createdAt to replace the below? */}
                {document.createdAt.getDate()} {document.createdAt.toLocaleString('default', { month: 'long' })} {document.createdAt.getFullYear()}
              </div>
              <div className="font-normal font-r-reg text-[0.9375em] hover:text-[#E46643] hover:cursor-pointer"
              onClick={() => onDocumentClick(document.content)}
              >
               {document.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

// "use server"

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// // use `prisma` in your application to read and write data in your DB

// // async function list () {
// // const documents = await prisma.document.findMany()
// // return documents;
// // }

// export default async function Lister() {
//    const documents = await prisma.document.findMany();

//     // if (!documents) {
//     //      return <div>None</div>
//     // }

//   return (
//     <div>
//         <ul>
//       {documents.map(document =>
//         <li key={document.id}>{document.content}{document.id}</li>
//       )}
//       </ul>
//     </div>
//   );
// }
