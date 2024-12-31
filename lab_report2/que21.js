function getNextWeekendDate(startDate) {
    
    const date = new Date(startDate);
  
    if (isNaN(date)) {
      throw new Error("Invalid date provided.");
    }
  
    
    const dayOfWeek = date.getDay();
  
   
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  
   
    const nextSaturday = new Date(date);
    nextSaturday.setDate(date.getDate() + daysUntilSaturday);
  
    return nextSaturday;
  }
  

  const today = new Date(); 
  const weekendDate = getNextWeekendDate(today);
  console.log("Next weekend date is:", weekendDate.toDateString());
  