import React from 'react';

interface BuyButtonProps {
  price: number;
}

const BuyButton: React.FC<BuyButtonProps> = ({ price }) => {
  // Formatação do preço para o formato brasileiro
  const formattedPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="w-[98%] md:w-[60%] lg:w-[50%]">
      <button className="mt-4 mb-4 flex w-full items-center justify-center rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none">
        <span className="text-lg">Comprar Título</span>
        <span className="ml-3 text-lg font-bold">R$ {formattedPrice}</span>
      </button>
    </div>
  );
};

export default BuyButton;
