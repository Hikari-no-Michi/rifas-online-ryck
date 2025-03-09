import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex w-[90%] items-center justify-between md:w-[60%] lg:w-[50%]">
      <div className="flex items-center justify-center">
        <svg
          stroke="currentColor"
          fill="#fff"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.5rem"
          width="1.5rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </div>
      <div className="text-center text-lg text-[#98BD43]">{title}</div>
      <div className="flex items-center justify-center space-x-5">
        {/* Ícone Home */}
        <a href="#" className="text-white">
          <svg
            stroke="currentColor"
            fill="#fff"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5rem"
            width="1.5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
        </a>
        {/* Ícone Lua */}
        <svg
          stroke="currentColor"
          fill="#fff"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
