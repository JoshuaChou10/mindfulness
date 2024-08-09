import React, { useState, useEffect } from 'react';
import '../app/globals.css';

const Calendar = () => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    const savedCompletedDays = localStorage.getItem('completedDays');
    if (savedCompletedDays) {
      setCompletedDays(JSON.parse(savedCompletedDays));
    }
  }, []);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendarDays = () => {
    const today = new Date();
    const daysInMonth = getDaysInMonth(today.getMonth(), today.getFullYear());
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return daysArray.map((day) => (
      <div
        key={day}
        className={`p-2 border ${
          completedDays.includes(day) ? 'bg-green-400' : 'bg-black-100'
        }`}
      >
        {day}
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Meditation Calendar</h2>
      <div className="grid grid-cols-7 gap-2 text-black">
        {renderCalendarDays()}
      </div>
    </div>
  );
  
};

export default Calendar;
