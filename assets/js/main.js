/*
1) Напишите код с ипользованим Промиса, который будет вывожить в консоль текст приветствия я через 3 секунды.
*/

const greetingDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello after 3 seconds, used by promise');
    }, 3000);
});

greetingDelay.then((greeting) => {
    console.log(greeting);
});


