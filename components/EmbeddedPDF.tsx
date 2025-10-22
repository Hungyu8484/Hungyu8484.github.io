import React, { useState } from 'react';

interface EmbeddedPDFProps {
  src: string;
  title: string;
  height?: string;
  width?: string;
}

export default function EmbeddedPDF({ 
  src, 
  title, 
  height = '480px', 
  width = '100%' 
}: EmbeddedPDFProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Embedded PDF Viewer */}
      <div className="relative w-full" style={{ height }}>
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0 rounded-lg"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onError={() => console.log('PDF failed to load')}
        />
        <style jsx>{`
          iframe::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Modal for full-screen PDF viewing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <iframe
              src={src}
              title={title}
              className="w-full h-full border-0 rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Open in Modal Button */}
      <button
        onClick={openModal}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label={`Open ${title} in full screen`}
      >
        Open in Full Screen
      </button>
    </>
  );
}



