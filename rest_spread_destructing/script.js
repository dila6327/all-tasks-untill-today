// task_1
// Rest operatorundan (...) istifadə edərək istənilən sayda arqument qəbul edən və onların cəmini qaytaran sumAll funksiyasını yazın.
// function sumAll(...elements) {
//   return elements.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(1, 20, 30, 40)); 
// console.log(sumAll(5, 10, 15)); 



//task_2

// : [1, 2, 3, 4, 5] array-i verildikdə, array destructuring və rest operatoru istifadə edərək ilk iki elementi dəyişənlərə təyin edin, qalanları isə üçüncü bir dəyişənə yığın.

// const arr=[1,2,3,4,5];
// const[first,second,...rest]=arr;
// const elem_1=first;
// const elem_2=second;
// const elems_rest=rest;
// console.log('First element : ',elem_1);
// console.log('Second element : ',elem_2);
// console.log('Rest part : ',elems_rest);



//task_3
//  { name: 'John', age: 30, city: 'New York', profession: 'Engineer' } obyektini nəzərə alaraq, rest operatorundan istifadə edərək name və age məlumatlarını çıxarın, qalan xassələri isə başqa bir obyektə yığın
// const person = {
//   name: 'John',
//   age: 30,
//   city:'New-York',
//   Profession: "Engineer"
  
// };
// const {name,age,...rest}=person;
// const NewData={...rest};

// console.log(NewData);




//task_4

// function CombineArrays(arr1,arr2)
// {
//     return [...arr1,...arr2];
// }
// const array1=[1,2,3,4];
// const array2=[5,6,7,8];
// console.log("Combined Arrays : ",CombineArrays(array1,array2));




//task_5

// name və age xassələri olan person adlı bir obyekt yaradın. Spread operatorundan istifadə edərək bu obyekti klonlayan və city adlı yeni bir xassə əlavə edən bir funksiyanı yazın.

// function AddData(person)
// {

//     const NewData={...person,city:'Baku'};
//     return NewData;
// };
// const person={
//     name:'Dilruba',age:19
// };
// console.log(AddData(person));




// task_6

//  İki obyekt verilmişdir: { name: 'Alice' } və { age: 25 }. Onları spread operatorundan istifadə edərək tək bir obyektə birləşdirin
// const name={name:'Alice'};
// const age={age:25};
// const FullInfo={
//     ...name,...age
// };
// console.log(FullInfo);




// task_7

// İstənilən sayda array qəbul edən və onları spread və rest operatorları ilə bir array-ə birləşdirən mergeAndMultiply funksiyasını yazın. Sonra həmin birləşdirilmiş array-dəki bütün ədədlərin hasilini qaytarın.
// Tapşırıq: name və age xassələri olan obyektlərdən ibarət bir array qəbul edən funksiyanı yazın. Rest və spread operatorları ilə hər bir obyektə əlavə sahə əlavə edin və dəyişdirilmiş array-i qaytarın.

// function MergeAndMultiply(numArrays) {
//       const NewArray = [];
  
//       for (let i = 0; i < numArrays; i++) {
//           const arrSize = parseInt(prompt("How many elements will be in this array? "), 10);
//           const tempArray = [];
  
//           for (let j = 0; j < arrSize; j++) {
//               const arrayElement = parseFloat(prompt("element: ")); 
//               tempArray.push(arrayElement);
//           }
  
//           NewArray.push(...tempArray);
//       }
  
//       return NewArray.reduce((acc, currentValue) => acc * currentValue, 1);
//   }
//   const a = parseInt(prompt("Enter the number of arrays: "), 10);
// console.log("Product of array elements: ", MergeAndMultiply(a));


// task_8

// Birinci arqument olaraq vurğu qəbul edən və istənilən sayda əlavə arqument qəbul edən multiplyBy funksiyasını yazın. Spread və rest operatorları istifadə edərək, hər bir arqumenti (vurğudan sonra) vurğu ilə vurub array qaytarın.Real Dünyada İstifadə Tapşırığı

// function MultiplBy(a)
//     {
//         const PushElement=[];
//         for(let i=0;i<a;i++)
//         {
//             const newElement=parseInt(prompt("Enter any element to an array :"));
//             PushElement.push(newElement);
//         }
//         let [first,...rest]=PushElement;
//   for(let j=0;j<rest.length;j++)
//   {
//       rest[j]=rest[j]*first;
//   }
//          const Modified=[rest];
//          return Modified.flat();
//     }
// console.log(MultiplBy(4));