const DecrementNum = (num) => {
    console.log(num);
    if (num > 0) {
        DecrementNum(num - 1);
    }
};
DecrementNum(5.5);