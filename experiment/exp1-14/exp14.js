let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(`this is element ` + element);
    console.log(`this is index ` + index);
    // console.log(array);
    return element;
}, 80);