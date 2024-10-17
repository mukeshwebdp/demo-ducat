 // Array containing all image URLs for the slider
 let address = [
    'https://shoppy.sg/cdn/shop/products/Two-Way-Ladies-Bag-Fashion-10_67f13e7b-6fa6-405d-be31-234446178458.jpg?v=1631590013',
    'https://img.freepik.com/premium-photo/few-different-shopping-bags-desk_93675-135949.jpg',
    'https://i.ytimg.com/vi/6GQIxSNv8XU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/K0xgLBBiSh4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpEXwmO6MJg5gMxbblxiDQYuP2Tw',
]
let index =0;
let img = document.querySelector('img');

// Function to handle left button click
function left(){
    // Set the image source to the current index in the array
    img.src = address[index];
    index--;
    // Ensure the index doesn't go below 0
    if(index < 0){
        index = address.length-1;
    }
}

// Function to handle right button click
function right(){
    // Set the image source to the current index in the array
    img.src = address[index];
    index++;
    // If index exceeds the number of images, reset to 0
    if(index > address.length-1){
        index = 0;
    }
}

// each iteration img src change.
function get(){
    // Update image source to the current index
    img.src = address[index];
    console.log(index, address.length)
    index++
    // Reset index if it exceeds the array length
    if(index > address.length-1){
        index = 0;
    }
}
//Automatically change the image every 3 seconds
setInterval(get,3000);
