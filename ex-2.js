// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "friday";
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion;

/*
    Situation
You are creating a JavaScript program to check whether a customer qualifies for a discount promotion.

You have 6 Boolean variables:
Variable	Meaning
lastMonthPaidMoreThan4000	true if the customer spent more than 4,000 baht last month
isWeekday	true if the purchase is made Monday–Friday
hasBoughtProductFromITCategory	true if the customer has bought IT products before
hasAttendedDiscountEvent	true if the customer has attended a discount event before
isPlatinum	true if the customer is a Platinum member
hasPromotion	true if the customer qualifies for the discount

Promotion Requirements
A customer receives the promotion if either Case 1 OR Case 2 is satisfied.

Case 1: All four conditions must be true.
1. Spent more than 4,000 baht last month.
2. Shopping on a weekday (Monday–Friday).
3. Has NEVER bought an IT product before.
4. Has NEVER attended a discount event before.
Case 2:

The customer is a Platinum member.

Only one of these two cases needs to be satisfied.
John's Information
Information	John's Details
Last month's spending	4,001 baht
Shopping day	Friday
Bought IT products before?	No
Attended discount events before?	Yes, the second discount event
Membership	Gold

Your Tasks
1. Assign true or false to the first 5 variables based on John's information.
2. Write a logical expression for hasPromotion using the other variables.
3. Use console.log(hasPromotion) to check whether John qualifies.
*/

hasPromotion = (lastMonthPaidMoreThan4000 > 4000 && isWeekday === "friday" && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;
console.log(hasPromotion);
