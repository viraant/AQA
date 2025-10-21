var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var calculateArrays = function (_a) {
    var numbers = _a.numbers, strings = _a.strings;
    console.log(__spreadArray(__spreadArray([], numbers, true), strings, true));
};
var numbers = [2, 4, 6, 8];
var strings = ['Kyiv', 'Kharkiv', 'Odesa'];
calculateArrays({ numbers: numbers, strings: strings });
