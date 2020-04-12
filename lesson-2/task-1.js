function solution(A, K) {
    // (K % A.length) - reduce loops
    // spliceIndex - index of number that will be first element in result array
    const spliceIndex = A.length - (K % A.length);
    const removed = A.splice(spliceIndex);
    const result = removed.concat(A);

    return result;
}

