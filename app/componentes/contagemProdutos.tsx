import React from 'react';

interface CountProps {
  productCount: number;
  unitValue: number;
  setProductCount: (value: number) => void;
}

const ContagemDeProdutos: React.FC<CountProps> = ({
  productCount,
  unitValue,
  setProductCount,
}) => {
  const totalValue = productCount * unitValue;

  // Formatação para o padrão brasileiro
  const formattedTotalValue = totalValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedProductCount = productCount.toLocaleString('pt-BR');

  return (
    <>
      <div className="flex items-center justify-center">
        <p className="m-5 text-center text-2xl font-bold text-red-500">
          Total: R$ {formattedTotalValue}
        </p>
        <button
          className="ml-4 flex items-center bg-[#260c0c] justify-center rounded-md p-2 focus:outline-none"
          onClick={() => {
            setProductCount(20); // Definindo o valor para 20 ao clicar no botão
          }}
        >
          <svg
            fill="orange"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="24" // Define o tamanho do ícone
            width="24" // Define o tamanho do ícone
          >
            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </button>
      </div>

      <div className="mb-0 flex h-[50px] w-[98%] grid-cols-3 items-center justify-between gap-1 rounded-md bg-white p-1 md:w-[60%] lg:w-[50%]">
        {/* Botão de diminuir */}
        <div
          className="ml-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white text-black cursor-pointer"
          onClick={() => {
            if (productCount > 20) {
              setProductCount(productCount - 1); // Subtrai 1, mas não permite que fique menor que 20
            }
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>

        {/* Contador de produtos */}
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white text-black">
          <span className="text-xl font-medium text-black">
            {formattedProductCount}
          </span>
          <span className="text-xl font-medium text-black ml-2">Unidades</span>
        </div>

        {/* Botão de aumentar */}
        <div
          className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-white text-black cursor-pointer"
          onClick={() => {
            setProductCount(productCount + 1); // Adiciona 1 ao valor atual
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ContagemDeProdutos;
