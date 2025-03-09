import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex h-[300px] w-[98%] flex-col items-center justify-center p-6 md:w-[60%] lg:w-[50%]">
      <a target="_blank" className="cursor-pointer text-inherit" href="#">
        <label className="text-center text-sm font-medium text-white">
          Desenvolvido por
          <span className="badge bg-fuchsia-600 px-2 ml-2 py-1 text-white rounded-lg">
            Luiz Henrique
          </span>
        </label>
      </a>

      <div className="mt-4 flex space-x-8">
        <div className="text-center">
          <ul>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Sobre a Rifa
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Como Participar
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <ul>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Prêmios
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                Termos e Condições
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
