
let list = document.getElementById('categories');
let listItemHeader = document.querySelectorAll('.item > h2');
let listItemList = document.querySelectorAll('.item > ul')


let headersArray = [];
let ulLengthArray = [];
// Headers
for(let item of listItemHeader){
    //console.log(item.textContent)
    headersArray.push(item.textContent)
}

//inner ul length
for(let item of listItemList){
    //console.log(item.children.length)
    ulLengthArray.push(item.children.length)
}




// `Number of categories: ${list.children.length}

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5`
console.log(`Number of categories: ${list.children.length}`)
for( let i = 0; i < list.children.length; i+=1){
    console.log(
`Category: ${headersArray[i]}
Elements: ${ulLengthArray[i]}`

    )
}