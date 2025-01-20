
import React from 'react';

const Header = ({userData}) => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">{userData?.data?.name }</h1>
        <button type="button" class="text-white font-bold bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
