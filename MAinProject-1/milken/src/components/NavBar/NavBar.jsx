import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
  <img
    src="/images/logos/logo cow.jpeg"
    alt="Milk Project Logo"
    className="h-10 w-10 object-contain"
  />
  <span className="text-xl font-bold">Milken</span>
</div>

      <ul className="flex space-x-6">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        <li className="hover:text-blue-500 cursor-pointer">Login</li>
      </ul>
    </nav>
  );
}
