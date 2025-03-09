import React from 'react';

interface PriceAppProps {
  price: number;
  myTitlesText: string;
  prizeTitlesText: string;
}

export default function PriceApp({
  price,
  myTitlesText,
  prizeTitlesText,
}: PriceAppProps) {
  return (
    <div className="mt-4 w-[98%] md:w-[60%] lg:w-[50%]">
      {/* Preço */}
      <p className="text-left text-white">Por apenas:</p>
      <p className="text-left text-4xl font-medium text-white">R$ {price}</p>

      {/* Botões de escolha */}
      <div className="mt-4 flex w-full space-x-1">
        <div
          className="flex w-1/2 items-center justify-center bg-[#28a745] p-2 text-center text-black"
          style={{ fontWeight: '600' }}
        >
          {myTitlesText}
        </div>
        <div
          className="flex w-1/2 items-center justify-center bg-[#FFC107] p-2 text-center text-black"
          style={{ fontWeight: '600' }}
        >
          {prizeTitlesText}
        </div>
      </div>

      {/* Texto de orientação */}
      <p className="m-5 text-center text-white">
        Selecione a quantidade de títulos
      </p>
    </div>
  );
}
