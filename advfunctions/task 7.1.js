const HandleEven = () => {
    console.log("number is even");
};
const HandleOdd = () => {
    console.log("number is odd");
};

function handleNum(number, HandleOdd, HandleEven) {
    if (number % 2 === 0) {
        HandleEven();
    } else {
        HandleOdd();
    }
}
handleNum(11, HandleOdd, HandleEven);