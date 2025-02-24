// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;


lastMonthPaidMoreThan4000 = true
isWeekday = true
hasBoughtProductFromITCategory = true
hasAttendedDiscountEvent = false
isPlatinum = false

hasPromotion = ((lastMonthPaidMoreThan4000 && isWeekday)&& (hasAttendedDiscountEvent && hasBoughtProductFromITCategory)) || isPlatinum
console.log(hasPromotion);
