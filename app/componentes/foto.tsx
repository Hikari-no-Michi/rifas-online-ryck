import React from 'react';

interface PhotoAppProps {
  drawDate: string;
}

export default function PhotoApp({ drawDate }: PhotoAppProps) {
  return (
    <div className="relative flex w-[98%] flex-col items-center md:w-[60%] lg:w-[50%]">
      {/* Foto da moto */}
      <img
        src="https://motosmarin.com/wp-content/uploads/2022/12/GSX-8S_azul.png"
        alt="Imagem da moto"
        className="w-full rounded-lg object-cover"
      />

      {/* Data do sorteio */}
      <div className="absolute top-3 left-3 rounded bg-[#000000a0] p-2 text-xs font-bold text-white">
        {drawDate}
      </div>

      {/* Mensagem de alerta */}
      <div className="absolute bottom-[10px] left-3 w-auto animate-pulse rounded-lg bg-[#166d41] p-1 text-center text-xs text-white">
        Corre que está acabando!
      </div>
    </div>
  );
}
