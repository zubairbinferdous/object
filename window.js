
let Name = 'zubair';

function add(num1 , num2) {
    const result = num1 + num2;
    console.log('data inside', Name);
    // return result;
    function double(num) {
        return num * 2 ;
    }
    var total = double(result);
    console.log(total);
} 
console.log('data outside', Name);
const num = add(10 , 20);
console.log(num);

