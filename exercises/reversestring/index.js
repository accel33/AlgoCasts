// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const newstr = []
    const oldstr = [...str]
    const oldstr2 = Array.from(str)
    const strsplit = str.split('')
    console.log('con metodo split: ', strsplit);
    console.log('con metodo Array.from: ', oldstr2);
    for (let i = oldstr.length - 1; i >= 0; i--) {
        newstr.push(oldstr[i])
        // console.log(oldstr[i]);
    }
    console.log(newstr);
    console.log(newstr.join(''));
    return newstr.join('')
}
reverse('dcba')
module.exports = reverse;
