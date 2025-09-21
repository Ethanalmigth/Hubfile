import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Rechercher un dossier..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 shadow-sm transition"
        />
      </div>
    </>
  );
}
