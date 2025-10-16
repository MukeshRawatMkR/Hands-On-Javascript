//Iterators design pattern helps us to write declarative programming.



//custom iterator
function fetchNextElement(arr) {
    let index = 0;
    function next() {
        if (index == arr.length) {
            return undefined
        }
        const nextElement = arr[index];
        index++;
        return nextElement;
    }
    return {next};
}
const automaticFetcher = fetchNextElement([3, 2, 1]);
console.log(automaticFetcher); 
console.log(automaticFetcher.next()); //3
console.log(automaticFetcher.next()); //2
console.log(automaticFetcher.next()); //1
console.log(automaticFetcher.next()); //undefined
console.log(automaticFetcher.next()); //undefined
