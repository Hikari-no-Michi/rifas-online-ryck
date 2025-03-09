'use client';

import Header from './componentes/header';
import PhotoApp from './componentes/foto';
import PriceApp from './componentes/price';
import ChooseTickets from './componentes/chooseTickets';
import ContagemDeProdutos from './componentes/contagemProdutos';
import BuyButton from './componentes/buyButton';
import { useEffect, useState } from 'react';
import Regulamento from './componentes/regulamento';
import Footer from './componentes/footer';

export default function Home() {
  const [productCount, setProductCount] = useState(20);
  const [unitValue, setUnitValue] = useState(0.35);
  const [totalValue, setTotalValue] = useState(unitValue * productCount);
  const [valueChooseTickets, setValueChooseTickets] = useState<number>(0);

  useEffect(() => {
    setTotalValue(unitValue * productCount);
  }, [productCount, unitValue]);

  useEffect(() => {
    if (valueChooseTickets > 0) {
      setProductCount(productCount + valueChooseTickets);
    }
  }, [valueChooseTickets]);

  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif;" }}
    >
      <header className="flex h-[68px] w-full items-center justify-center bg-black">
        <Header title="Suzuki GSX-8S" />
      </header>

      <main className="flex w-full flex-col items-center justify-start border-t-2 border-[#98BD43] bg-black pt-3">
        <PhotoApp drawDate="Sorteio: 20/03/2025" />

        <PriceApp
          price={unitValue}
          myTitlesText="MEUS TÍTULOS"
          prizeTitlesText="TÍTULOS PREMIADOS"
        />

        <ChooseTickets
          setValueChooseTickets={setValueChooseTickets}
          options={[
            { value: 10 },
            { value: 20 },
            { value: 50 },
            { value: 100 },
            { value: 5000.0 },
            { value: 10000.0 },
          ]}
        />

        <ContagemDeProdutos
          productCount={productCount}
          unitValue={unitValue}
          setProductCount={setProductCount}
        />

        <BuyButton price={totalValue} />

        <Regulamento unitValue={unitValue} />

        <Footer />
      </main>
    </div>
  );
}
