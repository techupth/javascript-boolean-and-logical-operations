// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion = (lastMonthPaidMoreThan4000 > 4000)&&(isWeekday != "sunday" || isWeekday != "saturday")&&(!hasBoughtProductFromITCategory == "IT")&&(! hasAttendedDiscountEvent)&&(isPlatinum === true);

console.log(hasPromotion);
