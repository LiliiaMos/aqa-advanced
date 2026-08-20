function Divide(numerator, denominator) {
    if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error("Error: Invalid input: one or both arguments are not numbers");
    }
    if (denominator === 0) {
        throw new Error("Error: Division by zero is not allowed");
    }
    return numerator / denominator;
}

try {
    const result = Divide(2, 1);
    console.log("Result is :", result);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Execution completed");
}

try {
    Divide(2, 0);
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Execution completed");
}

try {
    Divide(2, "!");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Execution completed");
}