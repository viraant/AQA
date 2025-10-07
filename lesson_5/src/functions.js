const calculateArrays = function (numbers, strings) {
    console.log([...numbers, ...strings]);
};

const numbers = [2, 4, 6, 8];
const strings = ['Kyiv', 'Kharkiv', 'Odesa'];

calculateArrays(numbers, strings);
