const A = ["sıfır", "bir", "iki", "üç", "dörd", "beş", "altı",
    "yeddi", "səkkiz", "doqquz"]
const B = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış",
    "yetmiş", "səksən", "doxsan"]

// 10^3 - 10^63
const C = ["min", "milyon", "milyard", "trilyon", "katrilyon",
    "kentilyon", "sekstilyon", "septilyon", "oktilyon",
    "nonilyon", "desilyon", "undesilyon", "dodesilyon",
    "tredesilyon", "katordesilyon", "kendesilyon",
    "seksdesilyon", "septendesilyon", "oktodesilyon",
    "novemdesilyon", "vigintilyon"]
    
// 10^66
const MAX_NUMBER_LENGTH = C.length * 3 + 3

function readNumber(input: string): any {
    const stream = input.replace(/\D/g, '').replace(/(^00+)|(^0+(?=\d))/g, '')
    if (stream.length == 0) return stream
    if (stream.length == 1) return A[+stream]

    const digits = stream.split('')
    const digitCount = digits.length

    if (stream.length == 2) {
        const first = +digits[0]
        const second = +digits[1]
        return B[+first] + (second === 0 ? '' : ' ' + A[+second])
    }

    if (stream.length == 3) {
        const first = +digits[0]
        const other = digits[1] + digits[2]
        const suffix = 'yüz'
        const otherValue = readNumber(other)
        return (first === 1 ? suffix : `${A[first]} ${suffix}`) 
                +
             (otherValue ? ' ' + otherValue : '')
    }

    if (stream.length <= MAX_NUMBER_LENGTH) {
        const headOffset = digitCount % 3
        const headLength = headOffset === 0 ? 3 : headOffset
        const headRank = C[Math.trunc((digitCount - 1) / 3) - 1]
        const head = digits.slice(0, headLength).join('')
        const tail = digits.slice(headLength).join('')
        const headValue = readNumber(head)
        const tailValue = readNumber(tail)
        return `${headValue + ' ' + headRank}`
            + ' ' +
            `${tailValue}`
    }

    return 'çox boyük bir rəqəm'
}

export default {
  MAX_NUMBER_LENGTH,
  readNumber,
}
