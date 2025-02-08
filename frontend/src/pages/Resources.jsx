import React, { useState } from "react";

const notesData = [
  { title: "Multimedia Systems", fileUrl: "/Notes/Multimedia Organizer.pdf" },
  { title: "Cloud Computing", fileUrl: "/Notes/Cloud Computing Organizer.pdf" },
  {
    title: "Cyber Security",
    fileUrl: "/Notes/cyber security Organiser new.pdf",
  },
  {
    title: "Project Management",
    fileUrl: "/Notes/Project Management Organizer.pdf",
  },
  { title: "Maths 3 MCQ's", fileUrl: "" },
  { title: "Applied Mathematics-II Notes", fileUrl: "" },
  { title: "Engineering Maths - 4 Notes", fileUrl: "" },
  { title: "DBMS Notes", fileUrl: "/notes/dbms.pdf" },
  { title: "Computer Graphics Notes", fileUrl: "/notes/computer-graphics.pdf" },
  { title: "C Programming Notes", fileUrl: "/notes/c-programming.pdf" },
  { title: "Data Structures and Algorithms Notes", fileUrl: "/notes/dsa.pdf" },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleViewNotes = (fileUrl) => {
    setSelectedFile(fileUrl);
    setModalOpen(true);
  };

  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header Section - fixed */}
        <header
          className="bg-white shadow-md px-4 sm:px-8 py-4 z-50 w-full relative"
          style={{ marginTop: "4%" }} // Default margin for larger screens
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mt-8 sm:mt-0 md:mt-2 lg:mt-4">
              Engineering Notes 📚
            </h1>
            <div className="relative sm:mt-0 sm:ml-6 max-w-md w-full">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {/* Suggestions Dropdown */}
              {showSuggestions && searchTerm && (
                <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-auto z-10">
                  {filteredNotes.length > 0 ? (
                    filteredNotes.map((note, index) => (
                      <li
                        key={index}
                        className="p-2 flex items-center hover:bg-blue-100 transition cursor-pointer"
                        onClick={() => {
                          setSearchTerm(note.title);
                          setShowSuggestions(false);
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-gray-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                        <span>
                          {note.title
                            .toLowerCase()
                            .split(searchTerm.toLowerCase())
                            .map((part, i) => (
                              <span
                                key={i}
                                className={
                                  i > 0 ? "text-blue-500 font-semibold" : ""
                                }
                              >
                                {i > 0 && searchTerm}
                                {part}
                              </span>
                            ))}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </header>

        {/* Cards Section */}
        <main className="flex-grow p-4 sm:p-8 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredNotes.map((note, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all p-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Click to view and download
                </p>
                <button
                  onClick={() => handleViewNotes(note.fileUrl)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  View Notes
                </button>
              </div>
            ))}
          </div>
        </main>

        {/* Modal for Viewing Notes */}
        {/* Modal for Viewing Notes */}
        {modalOpen && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg w-11/12 max-w-6xl p-6 shadow-lg relative z-60 overflow-auto max-h-[90vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          View Notes
        </h2>
        <button
          onClick={() => setModalOpen(false)}
          className="text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
      </div>
      <iframe
        src={selectedFile}
        className="w-full h-[400px] sm:h-[500px] border rounded-md"
        title="Notes Viewer"
      />
      <div className="flex justify-end mt-4">
        <a
          href={selectedFile}
          download
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        >
          Download Notes
        </a>
      </div>
    </div>
  </div>
)}

      </div>
    </>
  );
};

export default Resources;
