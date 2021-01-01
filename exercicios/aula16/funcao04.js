function factorial(n) {
  let res = n

  for (let i = n - 1; i > 1; i--)
    res *= i

  return res
}

console.log(factorial(4))