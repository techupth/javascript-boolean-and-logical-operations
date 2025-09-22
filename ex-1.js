let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here

console.log(isAllow);
isOver18 = true;                // James อายุ 18 → true
hasCriminalBlacklist = false;   // James ไม่มีประวัติอาชญากรรม → false

isAllow = isOver18 && !hasCriminalBlacklist;

console.log("James is allowed? :", isAllow);
