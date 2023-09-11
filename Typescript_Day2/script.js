function ProductToSimplifiedProduct(productInfo) {
    // const { name, vendor, quantity, inStock, price } = productInfo;
    // const simplifiedProduct: SimplifiedProduct = {
    // 	name,
    // 	buyable: inStock > 0,
    // };
    // if (simplifiedProduct.buyable) {
    // 	simplifiedProduct.totalPrice = quantity * price;
    // }
    // return simplifiedProduct;
    var simplifiedProduct = {
        name: productInfo.name,
        buyable: productInfo.quantity > 0,
    };
    if (simplifiedProduct.buyable) {
        simplifiedProduct.totalPrice = productInfo.quantity * productInfo.price;
    }
    return simplifiedProduct;
}
function stringCombination(input) {
    var result = '';
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var checkInput = input_1[_i];
        if (typeof checkInput === 'number') {
            result += checkInput.toString() + ' ';
        }
        else {
            result += checkInput + ' ';
        }
    }
    return result;
}
function sumOrCombination(input) {
    var isNumber = input.every(function (checkArray) { return typeof checkArray === 'number'; });
    var isString = input.every(function (checkArray) { return typeof checkArray === 'string'; });
    // console.log(isString);
    // console.log(isNumber);
    if (input.length != 0) {
        if (isString) {
            return input.join(' ');
        }
        else if (isNumber) {
            var resultNumber_1 = 0;
            input.forEach(function (valueNumber) {
                if (typeof valueNumber === 'number') {
                    resultNumber_1 += valueNumber;
                }
            });
            return resultNumber_1;
        }
    }
    return 'Invalid Input';
}
// Function pertama
var inputFirstArrayCombination = stringCombination([1, 'data', '3', 'result']);
var inputSecondArrayCombination = stringCombination(['Bejo', 'has', '4', 'sport', 'car']);
console.log(inputFirstArrayCombination);
console.log(inputSecondArrayCombination);
// Function Kedua
console.log('================================');
var inputSumOrCombinationString = sumOrCombination(['the', 'dolphins', 'of', 'zettacamp']);
var inputSumOrCombinationNumber = sumOrCombination([1, 2, 3, 4]);
var inputSumOrCombinationInvalid = sumOrCombination([]);
console.log(inputSumOrCombinationString);
console.log(inputSumOrCombinationNumber);
console.log(inputSumOrCombinationInvalid);
// Function Ketiga
console.log('================================');
var productInfo1 = {
    name: 'Coca Cola',
    vendor: 'Coca Cola Company',
    quantity: 5,
    inStock: 100,
    price: 5000,
};
var simplifiedProduct1 = ProductToSimplifiedProduct(productInfo1);
console.log(simplifiedProduct1);
// const arr = ['the', 'dolphins', 'of', 'zettacamp']
// console.log(arr.join(' '));
