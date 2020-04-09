function solution(A, B) {
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        if (checkIfHaveSameDivisors(A[i], B[i]))
            result += 1;
    }

    return result;
}

function gcd(x, y) {
    if (x % y === 0)
        return y;
    else
        return gcd(y, x%y);
}

// divide till one of the given value is equals to 1
function divTillEqualsToOne(x, y) {
    while (x !== 1) {
        let gcd_value = gcd(x, y)
        if (gcd_value == 1) {
            break;
        }
        x /= gcd_value
    }
    return x;
}

function checkIfHaveSameDivisors(x, y) {
    let gcd_value = gcd(x, y);
    x = divTillEqualsToOne(x, gcd_value)
    if (x != 1)
        return false;
  
    y = divTillEqualsToOne(y, gcd_value);
    if (y !== 1)
	return false;

    return true;
}
