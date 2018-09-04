
let findComplement = function (num) {
    let binary = decimalToBinary(num)
    let complement = ''
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') complement += '0'
      else if (binary[i] === '0') complement += '1'
    }
    let result = binaryToDecimal(complement)
    return result
  };

  function decimalToBinary(num) {
    let binary = ''
    while (num) {
      let remainder = num % 2
      binary = remainder + binary
      num = (num - remainder) / 2
    }
    return binary
  }

  function binaryToDecimal(num) {
    let sum = 0
    let reversed = num.split('').reverse()

    for (let i = 0; i < reversed.length; i++) {
      sum += Math.pow(2, i) * reversed[i]
    }
    return sum
  }
