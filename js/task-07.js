let input = document.getElementById('font-size-control');
let magicString = document.getElementById('text');


input.addEventListener('input', sizeChanger)



function sizeChanger () {
    magicString.style.fontSize = `${Number(input.value)}px`
}