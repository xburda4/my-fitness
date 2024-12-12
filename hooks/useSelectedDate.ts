import { useState } from "react";


export function useSelectedDate() {
    const [selectedDate, setDate] = useState(new Date());

    const incrementDate = () => {
        setDate((prevDate) => {
          const newDate = new Date(prevDate);
          newDate.setDate(newDate.getDate() + 1);
          return newDate;
        });
      };
    
      // Function to decrement the date by one day
      const decrementDate = () => {
        setDate((prevDate) => {
          const newDate = new Date(prevDate);
          newDate.setDate(newDate.getDate() - 1);
          return newDate;
        });
      };

    return {selectedDate, incrementDate, decrementDate}
}