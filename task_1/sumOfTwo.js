/*function sumOfTwo(array1, array2, x) {
    return array1.some(function(item1){
      return array2.some(function(item2){
        return item1+item2==x;
      })
    })
    }
*/

function sumOfTwo(array1, array2, x) {
    var keys={};//Набор уникальных значений 
   //приведение массива к ассоциативному
    function arrayToKeys(arr){
    arr.forEach(function(element, index) {
        keys[element]=index;});
     }
  //проверка на длину 
   if(array1.length>array2.length) {
     arrayToKeys(array1);
   } else {
     arrayToKeys(array2);
   }
   return array2.some(function(item2) {
    return keys.hasOwnProperty(x-item2);
   });
}
   