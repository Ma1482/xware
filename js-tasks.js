
// // //task 1
// // let sentence = "Type a sentence and a search word"
// // console.log(sentence.includes('word'))
// // console.log(sentence.indexOf('word'))



// // //task 2
// // const myArray = sentence.split(" ");
// // console.log(myArray.length)

// // //task 3
// // let reversessentence = myArray.reverse()
// // let dis=""
// // reversessentence.forEach(char => {
// //   dis += char ;

// //   console.log(dis);
// // }); 

// //task 4
// let repeatedsentence="leteeeters"

// console.log(repeatedsentence);

// function chik(Num){
//   let word = ''
//   for (let i = 0; i < Num.length; i++) {
//   if(Num.indexOf(Num[i]) !== i) {
//     word += Num[i]
//   }
// }
// return word;



// };
// let cleanword = chik(repeatedsentence);
// console.log(cleanword);


// task 5

// let arr = [8,7,15,56,9];

// let totalCost = arr.reduce((x,total)=>{
  
//   return total +=  x
// },0);
// console.log(totalCost);
// // task 6
// function  Matha(){
// let arrr = [8,7,15,56,9];
// const max = Math.max(...arrr);
// console.log(max);
//  }
// Matha();

// task 7
// function  Matha(min = 1, max =100){
//   let difference = max - min;
//   let randomm = Math.random();

//   randomm = Math.floor( randomm * difference);
//   randomm = randomm + min;

//   return console.log(randomm)
// }
// Matha()
// // console.log(Matha()); 
// task 8
// let arr = [8,7,15,56,9];
// let array = [76,15,565,49,8];
// // task 9
// let arrays = arr.concat(array)
// // console.log(arrays)
// // task 10

// let totalCost = arr.reduce((x,total)=>{

//     return total +=  x

//   },0);
   
//   console.log([totalCost]);
  
//   task 11

// let averageCost = arr.reduce((x,total)=>{
  
//   return Math.floor(total +=  x /arr.length)

// },0);

// console.log(averageCost);
//    task 12

//    function CommonItemsArray(arr, array) {
//     let commonArray= []
//     for (let i = 0; i < arr.length; i++){
//       for (let j = 0; j < array.length; j++){
//           if(arr[i] == (array[j])){
//           commonArray.push(arr[i]);
          
//            }
//       }
//   }  

//   return commonArray;
// }
// let comm = CommonItemsArray(arr, array)
// console.log(comm)


// ///or
// function CommonItemsArray(arr, array) {
//   let a = arr.map((item)=>{
//     return array.filter((item1)=>{
//       return item === item1
//     })
//   })

// return a.flat();
// }
// let comm = CommonItemsArray(arr, array)
// console.log( comm)

// ///////////////////////////////////////////////////////////////////////////////////////////
// var form = document.getElementById("formId");
// function action(event) {
//     event.preventDefault();
// let emailvalue = document.getElementById("email").value ;
// let passvalue = document.getElementById("password").value ;


// localStorage.setItem("Email",emailvalue);
// localStorage.setItem("password",passvalue);


// localStorage.getItem("emailvalue");
// localStorage.getItem("passvalue");


// console.log(emailvalue);
// console.log(passvalue);
// }   
// form.addEventListener('submit', action);
// //////////////////////////////////////////////////////////////////////////////
// fetch("https://fakestoreapi.com/products")
// .then((result) =>{
//     let products =result.json();
//     return products;
// })
// .then((products) =>{
//     console.log(products);

//     for (let i = 0; i < products.length; i++) {
    
//     // let total = products[i].price

//     let costs = products.map((item)=>{
//         return item.price
//     })
//         console.log(costs);
        
// }

// let total =products.reduce((total,value)=>{
//     return total += value.price
// },0)

   
// // console.log(products[i].title);
// console.log(total);
// })

// class shape{
//   area(){}
// }
// class circal extends shape{
//   constructor(r){
//       super();
//   this.radius = r;
//   }
//   area(){
//       return Math.PI * this.radius ** 2
//   }
// }

// class rectangel extends shape{
//   constructor(w,h){
//       super();
//   this.width = w;
//   this.hight = h;
//   }
//   area(){
//       return this.width * this.hight;
//   }
// }
// const shapes =[ new circal(2), new rectangel(2,3), new circal(5)];
// shapes.forEach(item => console.log(item.area()));
