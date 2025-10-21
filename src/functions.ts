type numString = {
    numberss: number[];
    stringsss: string[];
};

const addTypes = ({ numberss, stringsss }: numString): void => {
    console.log([...numberss, ...stringsss]);
};

const numberss = [3, 4, 6, 0];
const stringsss = ['Kyiv', 'Kharkiv', 'Mykolayiv'];

addTypes({ numberss, stringsss });
