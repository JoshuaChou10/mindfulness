'use client'
import { useState, useEffect } from 'react';
import '../app/globals.css';
const Journal = () => {
  const [entry, setEntry] = useState('');

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-green-200 to-blue-200">
      <h1 className="text-black text-4xl font-bold mb-8">Mindfulness Journal</h1>
      <textarea 
        value={entry} 
        onChange={handleEntryChange} 
        rows={10} 
        cols={50} 
        className="border p-2 w-3/4 h-64"
      />
    </div>
  );
};

export default Journal;
