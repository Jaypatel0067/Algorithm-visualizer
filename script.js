let range = document.getElementById('range');
let speed = document.getElementById('speed');
let color="#ffae00";
var arr = [];
let container = document.getElementsByClassName('container');
let row1 = document.getElementById('row1')
let row2 = document.getElementById('row2')
let row3 = document.getElementById('row3')
let row4 = document.getElementById('row4')
let size = range.value;
let spd=10;
range.addEventListener('change',(arr)=>{
  clear()
  size = range.value;
  console.log(size)
  arraygenrater(arr);
})

speed.addEventListener('change',(arr)=>{
  spd = speed.value
})

function title_change(change_txt){
let title=document.querySelector('#title_srt');
textContent = title.textContent;
  title.textContent=change_txt;
}
 
//genrate random array and call function to load bars into document body
function arraygenrater() {
  arr.length = 0;
  for (i = 0; i <= size; i++) {
    arr.push(Math.floor(Math.random() * (100 - 1 + 1) + 1));
  }
  newdom(arr);
  return arr;
}

//---------display bars on document body
function newdom(arr) {
  clear();
  title_change(change_txt="Array Generated")
  for (i = 0; i <= arr.length - 1; i++) {
    let div = document.createElement("div");
    div.classList.add("divbar");
    div.style.height = arr[i]*3 + "px";
    // div.innerText = arr[i];
    row1.appendChild(div);
  }
  // for (i = 0; i <= arr.length - 1; i++) {
  //   let second = document.createElement("div");
  //   second.classList.add("secdivbar");
  //   second.style.height = arr[i]*3  + "px";
  //   // second.innerText = arr[i];
  //   row2.appendChild(second);
  // }
  // for (i = 0; i <= arr.length - 1; i++) {
  //   let third = document.createElement("div");
  //   third.classList.add("third");
  //   third.style.height = arr[i]*3  + "px";
  //   // second.innerText = arr[i];
  //   row3.appendChild(third);
  // }
  // for (i = 0; i <= arr.length - 1; i++) {
  //   let forth = document.createElement("div");
  //   forth.classList.add("forth");
  //   forth.style.height = arr[i]*3  + "px";
  //   // second.innerText = arr[i];
  //   row4.appendChild(forth);
  // }
}

var button = document.getElementById('button').addEventListener('click',()=>{
 
  clear();
})
//-------function used for clearing all bars on document body
function clear() {

  let x = document.querySelectorAll(".divbar");
  let y = document.querySelectorAll(".secdivbar");
  let z = document.querySelectorAll(".third");
  let o = document.querySelectorAll(".forth");

  
  x.forEach((box) => {
    box.remove();
  });
  y.forEach((item)=>{
    item.remove();
  })
  z.forEach((itemz)=>{
    itemz.remove();
  })
  o.forEach((itemo)=>{
    itemo.remove();
  })
  
}


// function newdomm(arr) {
//   clear();
//   for (i = 0; i <= arr.length - 1; i++) {
//     let div = document.createElement("div");
//     div.classList.add("divbar");

//     div.style.transition = "height 0.15s ease-out";

//     div.style.height = arr[i] + "px";
//     div.innerText = arr[i];
//     document.body.appendChild(div);
//   }
// }
function animation(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Insertion(arr) {
  title_change(change_txt="Insertion short")
    console.log(arr)
  let dom = document.getElementsByClassName("divbar");
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        for(let k=0;k<dom.length;k++){
            if(k!==i && k!==j){
                dom[k].style.backgroundColor = color;
            }
        }
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        dom[i].style.height = arr[i]*3 + "px";
        dom[i].style.backgroundColor = "red";
        // dom[i].innerText = arr[i];
        dom[j].style.height = arr[j]*3 + "px";
        dom[j].style.backgroundColor = "green";
        // dom[i + 1].innerText = arr[i];
       
        await animation(spd);
      }
    }
  }
  console.log(arr);
  
}
async function Selectionn(arr) {
  title_change(change_txt="Selection short")
  let n = arr.length;
  let dom = document.getElementsByClassName("divbar");
  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {

        for(let k=0;k<dom.length;k++){
            if(k!==i && k!==j){
                dom[k].style.backgroundColor = color;
            }
        }
        min = j;
        // dom[j].style.height = arr[j] + "px";
        // dom[j].style.backgroundColor = "darkgray";
        // dom[j].innerText = arr[j];

     
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
      
      dom[i].style.height = arr[i]*3 + "px";
      dom[i].style.backgroundColor = "red";
     
      dom[min].style.height = arr[min]*3 + "px";
      dom[min].style.backgroundColor = "green";
     
     
    }
    await animation(spd);
  }
  console.log(arr);
  newdom(arr);
  return arr;
  // bubblesort(arr)
}


async function Bubble(arr){
  title_change(change_txt="Bubble short")
  let dom = document.getElementsByClassName("divbar");
  //Outer pass
  for(let i = 0; i < arr.length; i++){

      //Inner pass
      for(let j = 0; j < arr.length - i - 1; j++){

          //Value comparison using ascending order

          if(arr[j + 1] < arr[j]){
            for(let k=0;k<dom.length;k++){
              if(k!==i && k!==j){
                  dom[k].style.backgroundColor = color;
              }
          }

              //Swapping
              [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]

              dom[j].style.height = arr[j]*3 + "px";
              dom[j].style.backgroundColor = "red";
             
              dom[j+1].style.height = arr[j+1]*3 + "px";
              dom[j+1].style.backgroundColor = "green";
          }
      }  await animation(spd);
  };
  newdom(arr);

  return arr;
};

async function insertionSort(arr) {
  title_change(change_txt="Insertion short")
  let dom = document.getElementsByClassName("divbar");
  console.log(arr)
    const { length } = arr;
    let temp;
    for (let i = 1; i < length; i++) {
        let j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] > temp) {
          for(let k=0;k<dom.length;k++){
            if(k!==i && k!==j){
                dom[k].style.backgroundColor = "#ffae00";
            }
        }
            arr[j] = arr[j - 1];
            j--;

            dom[j].style.height = arr[j]*3 + "px";
            dom[j].style.backgroundColor = "red";
           
            dom[j+1].style.height = arr[j+1]*3 + "px";
            dom[i].style.backgroundColor = "green";
        } await animation(spd*10);
        arr[j] = temp;
        
    }
     
    return arr;
}
//  function mergeSort(arr){
//   if (arr.length <= 1) return arr;
  
//   let mid = Math.floor(arr.length/2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//    return merge(left, right);
//  }
 
  function merge(arr) {
    if (arr.length <= 1) return arr;
  
    let mid = Math.floor(arr.length/2);
    let arr1 = arr.slice(0, mid);
    let arr2 = arr.slice(mid);
  
     
  let i = 0;
  let j = 0;
  let results = [];
  while(i < arr1.length && j < arr2.length) {
   if (arr2[j] > arr1[i]) {
    results.push(arr1[i]);
    i++;  
   }else {
    results.push(arr2[j])
    j++; 
   }
  }
  while(i < arr1.length){
   results.push(arr1[i]);
   i++; 
  }
  while(j < arr2.length){
   results.push(arr2[j]);
   j++; 
  }
   
  console.log(results)
  return results
 }