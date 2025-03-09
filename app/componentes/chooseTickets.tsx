import React from 'react';

interface TicketOption {
  value: number;
}

interface ChooseTicketsProps {
  options: TicketOption[];
  setValueChooseTickets: (value: number) => void;
}

const ChooseTickets: React.FC<ChooseTicketsProps> = ({
  options,
  setValueChooseTickets,
}) => {
  return (
    <div className="grid w-[98%] grid-cols-3 gap-1 md:w-[60%] lg:w-[50%]">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-md bg-[#182238] p-5 text-center text-white cursor-pointer"
          onClick={() => {
            setValueChooseTickets(0); // Resetando para garantir atualização
            setTimeout(() => setValueChooseTickets(option.value), 0);
          }}
        >
          <div
            className="mb-2 text-[24px] font-bold md:text-[29px] lg:text-[29px]"
            style={{
              fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
              color: '#DEE2E6',
            }}
          >
            +{option.value.toLocaleString('pt-BR')}
          </div>
          <div className="text-right">Selecionar</div>
        </div>
      ))}
    </div>
  );
};

export default ChooseTickets;
