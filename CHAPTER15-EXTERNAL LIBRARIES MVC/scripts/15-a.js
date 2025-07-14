//  import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
//  const today = dayjs();
//  const date = today.add(5, 'days');
//  console.log(date.format('MMMM D'));



// import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// const today = dayjs();
// const date = today.add(1, 'month');
// console.log(date.format('MMMM D'));


// import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// const today = dayjs();
// const date = today.subtract(1, 'month');
// console.log(date.format('MMMM D'));



// import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
// const date = dayjs();
// console.log(date.format('dddd'));




import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

import isSatSun from './isWeekend.js'

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));