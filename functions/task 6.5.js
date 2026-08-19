function CheckOrder(available, ordered) {
    if (available <= ordered) {
        return "Your order is too large, we don't have enough goods.";
    } else if (ordered == 0) {
        return "Your order is empty.";
    } else {
        return "Your order is accepted";
    }
}
console.log(CheckOrder(20, 10));
console.log(CheckOrder(20, 0));
console.log(CheckOrder(20, 21));