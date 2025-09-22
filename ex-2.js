// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; // มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
let isWeekday = true; // ไปซื้อของวันศุกร์
let hasBoughtProductFromITCategory = false; // ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
let hasAttendedDiscountEvent = true; // เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
let isPlatinum = false; // เป็น Member ระดับ Gold

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;
console.log("John has promotion? :", hasPromotion); 

