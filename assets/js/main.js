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
    console.log('============================================');
});


/*
2) Напишите промис внутри которого будет получатся случайное число от 0 - 10,
если число четное то выполнять resolve, если нет то reject.
Результат выводить через then & catchю
*/

const randomNumberPromise = new Promise((resolve, reject)=>{
    const randomNumber = Math.floor(Math.random() * 10);
    (randomNumber % 2 === 0) ? resolve(randomNumber) : reject(randomNumber);
});

randomNumberPromise.then((number)=>{
    console.log('resolve number ===> ', number);
}).catch((number)=>{
    console.log('reject number ===> ', number);
}).finally(()=>{
    console.log('============================================');
});


/*
3) используя async/await реализуйте функцию deleay:
.
console.log('first call');
deleay(4000); // здесь код должен ждать 4 секунды и не идти дальше
console.log('second call');
*/

async function deleay (time) {
    let setTime = new Promise((resolve) => {setTimeout(()=>{resolve()}, time)});
    await setTime;
};

(async function func() {
    console.log('first call');
    await deleay(4000);
    console.log('second call');
})();

