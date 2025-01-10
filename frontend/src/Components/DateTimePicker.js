import React from 'react';

const DateTimePicker = ({ dates, selectedDate, setSelectedDate, timeSlots, selectedTime, setSelectedTime }) => (
  <div>
    <div className="grid grid-cols-7 gap-2">
      {dates.map((date, index) => (
        <div
          key={index}
          onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
          className={`flex flex-col items-center p-4 rounded-xl cursor-pointer ${
            selectedDate === date.toISOString().split('T')[0] ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'
          }`}
        >
          <span className="text-xs font-medium">{date.toLocaleString('default', { weekday: 'short' })}</span>
          <span className="text-xl font-bold my-1">{date.getDate()}</span>
          <span className="text-xs">{date.toLocaleString('default', { month: 'short' })}</span>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
      {timeSlots.map((time, index) => (
        <div
          key={index}
          onClick={() => setSelectedTime(time)}
          className={`p-3 rounded-xl text-center cursor-pointer ${
            selectedTime === time ? 'bg-blue-500 text-white' : 'hover:bg-blue-50 border border-gray-100'
          }`}
        >
          <span className="text-sm font-medium">{time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DateTimePicker;
