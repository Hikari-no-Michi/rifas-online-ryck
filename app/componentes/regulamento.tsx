import React, { useState } from 'react';

interface RegulamentoProps {
  unitValue: number;
}

const Regulamento: React.FC<RegulamentoProps> = ({ unitValue }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className="w-[98%] rounded-lg border-2 border-[#2C3A4B] bg-[#182238] md:w-[60%] lg:w-[50%]">
      <button
        className="flex w-full items-center justify-between rounded-lg bg-transparent px-4 py-2 text-lg font-semibold text-white uppercase hover:bg-[#2C3A4B] focus:outline-none"
        aria-expanded={showContent ? 'true' : 'false'}
        onClick={toggleContent}
      >
        <span className="w-full text-center">Regulamento / Descrição</span>
        <svg
          className={`h-4 w-4 transform transition-transform ${
            showContent ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
        </svg>
      </button>
      {showContent && (
        <div
          id="regulamento-content"
          className="mt-2 p-4 text-center text-lg text-white uppercase"
        >
          <p>SUZUKI GSX-8S POR APENAS {unitValue}💰🍀</p>
        </div>
      )}
    </div>
  );
};

export default Regulamento;
