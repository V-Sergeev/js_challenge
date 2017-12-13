function sumOfTwo(array1, array2, x) {
    return array1.some(function(item1){
      return array2.some(function(item2){
        return item1+item2==x;
      })
    })
    }
    