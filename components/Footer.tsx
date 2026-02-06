
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
        <p>© 2024 Naamya Goel. All Rights Reserved.</p>
        <div className="mt-4 md:mt-0 flex space-x-8">
          <a href="#" className="hover:text-black transition-colors">Back to Top</a>
          <span>Design Student @ NID / IDC / Private Institute</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
