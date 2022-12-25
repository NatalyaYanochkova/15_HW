// Test data
const strArray1 = ["aaa","bbb","ccc","ddd"];
const numArray = [45,7,6,32,5,3,6,3,2,4,6,4,2];
const strArray2 = ["hello","world","I","am","a","JS","developer"];

// Functions for onclick event
function test1(){
    let resArr = ["lll","mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll","mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}
function test2(){
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray,6)); // expected 3
    console.log(count(numArray,-10)); // expected 0
}
function test3(){
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
    /*displayOccurrences();*/
}
function test4(){
    const res = ulSurround(strArray1);
    console.log(res);
}
function test5(){
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}
// Function for implementation
/*Write function arrayCopy that gets the following parameters : function
arrayCopy(src,srcPos,dst,dstPos,length) {....}
where: src - source array, srcPos - index of the source array,
dst - array destination, dstPos - index of destination array,
length - number of elements. This function should copy
length elements from src array beginning from srcPos
index to dst array from dstPos index*/
function arrayCopy(src,srcPos,dst,dstPos,length){
    return dst.splice(dstPos, 0, ...src.slice(srcPos, length+srcPos));
}
/*Write function count that returns how many times a
given element encountered in a given array. Example of
input array
Apply the array function reduce.*/
function count(array, str){
return array.reduce(function (acc, value) {
    if (value===str){
        acc++;
    }
        return acc;
}, 0);
    /*return array.filter(i => i == str).length;*/
};

/*Write function displayOccurrences(array).
Array contains the repeated strings, for example
The function should display out the words and how many
times each word is encountered in the array in the format
as shown below. The words order isn’t defined. For
example:
    abc -> 2
lmn -> 3
prst ->1
ab ->1*/
function displayOccurrences(array){
    const res = array.reduce(function (acc, value) {
        if (acc[value]){
            //defined previously
            acc[value]++;
        } else {
            //undefined, new value
            acc[value] = 1;
        }
        return acc;
    },{});
    console.log(JSON.stringify(res));
    /*let arr = ['abc','lmn', 'abc', 'lmn','lmn', 'prst', 'ab'];
    let str = 'lmn';
    console.log(arr.filter(i => i == str).length);*/
}
/*Write function ulSurround that surrounds array of
strings inside <ul></ul> element. Example of input array
const strings=["abc","lmn","cd"]
Output array for the above example- const
    ulSurrounding=ulSurround(strings)
        ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul
    >"]
Apply the array functions: splice and map*/
function ulSurround(strings){
    return['<ul>', '</ul>'].splice(1, 0,...strings.map(
        function (value){
            return'<li>'+value+'</li>'
        }
    )).join('');
    /*return['<ul>', ...strings.map(
        function (value){
        return'<li>'+value+'</li>';
    }),'</ul>'].join('');*/
}

/*Write a method that will sort an array of strings in
order of string length from shortest to longest*/
function lengthSort(array){
    //TODO implement here
}