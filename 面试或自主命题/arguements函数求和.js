/*
// Should equal 15
sum(1, 2, 3, 4, 5);
// Should equal 0
sum(5, null, -5);
// Should equal 10
sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
  'E', 1, 'F', 1, 'G', 1);
// Should equal 0.3, not 0.30000000000000004
sum(0.1, 0.2);
 */
function sum(){
    let arr = Array.from(arguments)
    let result = 0
    for(let i of arr){
        if(typeof i === 'number'){
            result += i
            console.log(result);
            console.log(typeof result)
            result = Number(result).toFixed(1);
        }
    }
    return result
}
console.log(sum(0.1,0.2))