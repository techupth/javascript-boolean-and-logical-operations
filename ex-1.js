let isOver18 = true;// over 18
let hasCriminalBlacklist = true;// has Crim
let isAllow = true; // Attend the event
isAllow = isOver18 && !hasCriminalBlacklist;//Conditions 
isOver18 = false; // Jame 18
hasCriminalBlacklist = false; // Jame no Crim
console.log(isAllow);
