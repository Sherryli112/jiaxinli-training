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

// function app(){
//     console.log("app")
// }

// let app = function(){
//     console.log("app")
// }


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


