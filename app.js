// require('dotenv').config();
//
// console.log(process.env.API_KEY)

console.log('node執行')

//Array (陣列)
const arr = [1, 2, 3]

// arr.push(4) //[1, 2, 3, 4]

// arr.pop()  //[1, 2]

// arr.shift()  //[2, 3]

// arr.unshift(0)  //[0, 1, 2, 3]

const arr2 = [4, 5];
// let res = arr.concat(arr2); //res 是 [1, 2, 3, 4, 5]；arr 還是 [ 1, 2, 3 ]

// let res = arr.join("")  //res 是 "123"；arr 還是 [ 1, 2, 3 ]

// let res = arr.slice(0, 2) //res 是 [1, 2]；arr 還是 [ 1, 2, 3 ]

// arr.splice(0, 2, '取代')  //arr 變成['取代', 3]

// let res = arr.map((item, index) => item*2)  //res 是 [2, 4, 6]；arr 還是 [ 1, 2, 3 ]

// let res = arr.filter(item => item %2 === 0) // res 是 [2]；arr 還是 [ 1, 2, 3 ]

const arr3 = [19, 7, 68, 35];
arr3.sort()
// console.log(arr3);  //arr3 是 [19, 35, 68, 7]

// console.log(res);
// console.log(arr);


let [a, b, c] = [10, 20, 30];
// console.log(a) //10



//Object (物件)
const obj = {
    name: "Jack",
    age: 18
}

// console.log(Object.keys(obj)) //['name', 'age']

// console.log(Object.values(obj))  //['Jack', 18]

// console.log(Object.entries(obj))  //[['name', 'Jack'], ['age', 18]]

const obj2 = {
    fav: "music"
}
// console.log(Object.assign(obj, obj2))  //{name: 'Jack', age: 18, fav: 'music'}
// console.log(obj)  //{name: 'Jack', age: 18, fav: 'music'}

const obj3 = {
    fine() {
        console.log("good")
    }
};
const saygood = Object.create(obj3);
// saygood.fine() //good


const {name, age} = obj;
// console.log(age);  // 18





//Set (集合)
const mySet = new Set()

mySet.add(1); //Set(1){1}

// mySet.delete(1);  //Set(0) {size: 0}

// console.log(mySet.has(2))  //false

// mySet.clear();  //Set(0) {size: 0}

// console.log(mySet)




//Map
const myMap = new Map()

myMap.set('name', 'Jack');  //Map(1){'name' => 'Jack'}

// console.log(myMap.get('name'))  //Jack

// myMap.delete('name'); //Map(0) {size: 0}

// console.log(myMap.has('name'))  //true

// myMap.clear();  //Map(0){size: 0}

// console.log(myMap.keys())  //[Map Iterator] { 'name' }

// console.log(myMap.values())  //[Map Iterator] { 'Jack' }

// console.log(myMap.entries()) //[Map Entries] { [ 'name', 'Jack' ] }

// console.log(myMap)





//Function (函式 or 函數 or 方法)

// app()

//函數宣告(Function Declaration)
// function app(){
//     console.log("app")
// }


//表達式 (Function Expression)
// let app = function(){
//     console.log("app")
// }



//箭頭函數(Arrow Function)
// const arrow = {
//     name: 'Anna',
//     sayHi: function () {
//         setTimeout(() => {
//             console.log(`Hi, ${this.name}`);
//         }, 1000);
//     }
// };
// arrow.sayHi()
// 箭頭函數不會綁定自己的 this，而是繼承外層的 this
// 外層的 sayHi 是被 arrow.sayHi() 調用的普通方法
// 因此這裡的 this 指向 arrow 物件
// 所以得出結果是 Hi, Anna


//使用 call 改變指向 - 一般函數
// const arrow = {
//     num:100
// }
// window.num = 200
//
// const add = function (a, b, c){
//     return this.num + a + b + c
// }
// const res = add.call(arrow, 1, 2, 3)
// console.log(res) //一般函數綁定的 this 是 arrow，所以 res 是 106

//使用 call 改變指向 - 箭頭函數
// const arrow = {
//     num:100
// }
// window.num = 200
//
// const add = (a, b, c) => {
//     return this.num + a + b + c
// }
// const res = add.call(arrow, 1, 2, 3)
// console.log(res) //由於綁定的 this 無效，add 函數的 this 指向 window，所以 res 是 206


//箭頭函數的自動綁定範例1(一般函數)
// const arrow = {
//     num:100,
//     doSomethingLater(){
//         setTimeout(function (){
//             //這裡是普通函數，this 在執行時由 setTimeout 間接呼叫
//             //在瀏覽器中，setTimeout 的回調函數，默認 this 指向 window
//             this.num++
//             console.log(this.num) //因為在 window 中沒有 num，所以運算實際上是 window.num++，undefined + 1 = NaN
//         },1000)
//     }
// }
// arrow.doSomethingLater()


//箭頭函數的自動綁定範例2(箭頭函數)
// const arrow = {
//     num:100,
//     doSomethingLater(){
//         setTimeout(() => {
//             // 箭頭函數不會綁定自己的 this，而是繼承外層的 this
//             // 外層的 doSomethingLater 是被 arrow.doSomethingLater() 調用的普通方法
//             // 因此這裡的 this 指向 arrow 物件
//             // 所以 this.num++ 實際上是 arrow.num++
//             // 所以得出結果是 101
//             this.num++
//             console.log(this.num) //101
//         },1000)
//     }
// }
// arrow.doSomethingLater()




//補充 call()
// const human = {
//     name: 'Jack',
//     age: 18,
//     heal() {
//         console.log(`${this.name} is ${this.age} years old.`)
//     }
// }
// const power = {
//     name: 'Rose',
//     age: 20
// }
// human.heal() //Jack is 18 years old.
// human.heal.call(power) //Rose is 20 years old.



//補充 apply()
// const human = {
//     name: 'Jack',
//     age: 18,
//     heal(fav, what) {
//         console.log(`${this.name} is ${this.age} years old. ${fav} is ${what}.`)
//     }
// }
// const power = {
//     name: 'Rose',
//     age: 20
// }
// human.heal.apply(power, ['Hobby', 'singing']) //Rose is 20 years old. Hobby is singing.



//補充 bind()
// const human = {
//     name: 'Jack',
//     age: 18,
//     heal(fav, what) {
//         console.log(`${this.name} is ${this.age} years old. ${fav} is ${what}.`)
//     }
// }
// const power = {
//     name: 'Rose',
//     age: 20
// }
// const greatHuman = human.heal.bind(power)
// greatHuman('Hobby', 'singing') //Rose is 20 years old. Hobby is singing.



//return 範例
// function square(num) {
//     return num * num
//     console.log(num) // 程式只執行到 return，因此這裡不會執行
// }
// const res = square(2)
// console.log(res) //4



//yield 範例
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
//
// const res = generator()
// //以 next() 方法來讓生成器繼續執行到下一個 yield，每次 next() 返回一個物件 { value, done }，value 是 yield 的值、done 是布林值，表示生成器是否完成
// console.log(res.next()) //{value: 1, done: false}
// console.log(res.next()) //{value: 2, done: false}
// console.log(res.next()) //{value: 3, done: false}
// console.log(res.next()) //{value: undefined, done: true}



//Scope(作用域) 範例
// let x = 10;
// function test() {
//     let y = 5;
//     console.log(x);
// }
// test() // x 變數在全局作用域範圍宣告，因此在函數內部可以獲取值
// console.log(y) // 報錯：y is not defined，y 變數在函數的區塊作用域宣告，因此在全局範圍無法獲取值


//Closure(閉包) 範例
// function createCounter() {
//     let count = 0;
//     return function() {
//         //內部的函數，使用了外部函數的局部變數 count
//         //即使 createCounter 已經執行完畢，內部的函數依然保有對 count 的存取權
//         //所以每次執行 count++ 後，count 都會遞增
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3



//Promise 範例
// function requestData(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url === "test.io") {
//                 resolve("hello welcome to test");
//             } else {
//                 reject("it is not test");
//             }
//         }, 3000);
//     });
// }
// // 1. 請求成功
// requestData("test.io")
//     .then((res) => console.log(res)) //hello welcome to test
//     .catch((e) => console.log(e))
// //2. 請求失敗
// requestData("test.com")
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e)) //it is not test


//async await 範例
// async function getData() {
//     try {
//         //https://v2.jokeapi.dev/joke/Any
//         const res = await fetch("https://getsomedata");
//         const data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.error(err) //TypeError: Failed to fetch
//     }
// }
// getData()



//提升 (Hoisting)
// console.log(i) //undefined
// console.log(j) //Cannot access 'j' before initialization
// console.log(k) //Cannot access 'k' before initialization
// var i = 1
// let j = 2
// const k = 3
// j = 4
// k = 4