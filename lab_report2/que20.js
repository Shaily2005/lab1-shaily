function getTimeDifferenceInDays(date1, date2) {
    
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    if (isNaN(d1) || isNaN(d2)) {
      throw new Error("Invalid date(s) provided.");
    }
  
 
    const differenceInMilliseconds = Math.abs(d2 - d1);
  
    
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay);
  
    return differenceInDays;
  }
  

  const date1 = "2024-12-01";
  const date2 = "2024-12-23";
  console.log(getTimeDifferenceInDays(date1, date2)); 
  