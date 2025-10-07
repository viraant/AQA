//let func = (arg1, arg2, ..., argN) => expression;

const addNumsting = (numbers, strings) => {
    console.log([...numbers, ...strings]);
};

const numbers = [2, 4, 6, 8];
const strings = ['Kyiv', 'Kharkiv', 'Odesa'];

addNumsting(numbers, strings);
