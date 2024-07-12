'use client';

import { useState, useEffect } from 'react';
import '../app/globals.css';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedEntry = localStorage.getItem('journalEntry');
    if (savedEntry) {
      setEntry(savedEntry);
    }
  }, []);

  const handleEntryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEntry(e.target.value);
    localStorage.setItem('journalEntry', e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-200">
      <h1 className="text-black text-4xl font-bold mb-8">
        Mindfulness Journal
        <span onClick={toggleModal} className="ml-4 text-blue-500 cursor-pointer hover:text-blue-700">
          ℹ️
        </span>
      </h1>
      <textarea 
        value={entry} 
        onChange={handleEntryChange} 
        rows={10} 
        cols={50} 
        className="text-black border p-2 w-3/4 h-64"
      />
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-3/4 max-w-md relative">
              <div className="flex justify-end">
                <button onClick={toggleModal} className="text-black-500 hover:text-black-700">&times;</button>
              </div>
              <h2 className="text-2xl font-semibold mb-4">What is a Mindfulness Journal?</h2>
              <p className="text-gray-800 mb-4">A mindfulness journal is a place to jot down any thoughts or feelings you notice throughout the day. It is a good tool to help bring awareness and clarity into our lives. When we put our thoughts and feelings on paper, we may find many things we didn't notice before.</p>
            
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={toggleModal}></div>
        </>
      )}
    </div>
  );
};

export default Journal;
