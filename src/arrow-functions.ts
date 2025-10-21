type addNumberString = {
    digits: number[];
    stringss: string[];
};

const addNumsting = ({ digits, stringss }: addNumberString): void => {
    console.log([...digits, ...stringss]);
};

const digits = [2, 4, 6, 8];
const stringss = ['Kyiv', 'Kharkiv', 'Odesa'];

addNumsting({ digits, stringss });
