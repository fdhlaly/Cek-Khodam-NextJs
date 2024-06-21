"use client";

import { useState } from "react";
import data from "./data";

export default function Home() {
  const [result, setResult] = useState("");

  const submitValue = () => {
    const input = document.getElementById("input").value.trim();

    if (!input) {
      alert("Mohon isi nama kamu!");
    } else {
      const randomIndex = Math.floor(Math.random() * data.length);
      setResult(data[randomIndex]);
    }
    document.getElementById("input").value = "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover bg-custom-image">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 bg-white bg-opacity-50 border-2 border-white rounded-lg">
        <div className="flex flex-col items-center justify-center w-full gap-4 mb-8">
          <input
            type="text"
            id="input"
            name="input"
            placeholder="Cek khodam kamu disini yuk!"
            className="w-full h-12 text-2xl text-center border-2 border-transparent rounded-full focus:outline-none focus:bg-gray-800 focus:text-white focus:border-gray-300"
          />
          <button
            id="cek"
            onClick={submitValue}
            className="w-20 h-12 text-lg font-bold text-center rounded-full cursor-pointer border-2 border-gray-600 hover:bg-gray-200"
          >
            Cek
          </button>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="text-2xl font-bold text-black">{result}</p>
        </div>
      </div>
    </div>
  );
}
