function spiral(param1) {

    //1. GENERATE ARRAY PARAM1 X PARAM1
    const array = []
    let num = 0

    for (let i = 0; i < param1; i++) {
        array[i] = []
        for (let j = 0; array[i].length < param1; j++) {
            array[i].push(num)
            num++
        }
    }
    
    //2. TRACE ARRAY SECARA SPIRAL
    let left = 0, top = 0, right = array.length - 1, bottom = array[0].length - 1
    let direction = 'right'
    const result = []
    
    while (left <= right && top <= bottom) {
        if (direction === 'right') {
            for (let i = left; i <= right; i++) {
                result.push(array[top][i])
                // console.log(`koordinat ${[top]} ${[i]}`)
            }
            top++
            direction = 'down'
            //CEK KOORDINAT
            // console.log(`left ${left}, right ${right}, top ${top}, bottom ${bottom}`);
        }
        
        
        else if (direction === 'down') {
            for (let i = top; i <= bottom; i++) {
                result.push(array[i][right])
                // console.log(`koordinat ${[i]} ${[right]}`);
            }
            right--
            direction = 'left'
        }
        
        else if (direction === 'left') {
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i])
                // console.log(`koordinat ${[bottom]} ${[i]}`);
            }
            bottom--
            direction = 'up'
        }
        
        else if (direction === 'up') {
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left])
                // console.log(`koordinat ${[i]} ${[left]}`);
            }
            left++
            direction = 'right'
        }
        
    }
    
    return result
}

console.log(spiral(5))
console.log(spiral(6))
console.log(spiral(7))
console.log(spiral(10))