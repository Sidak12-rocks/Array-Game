let myArray=[]
function addItem(){
    const input=document.getElementById("ItemInput")
    const item=input.value.trim()
    if (item){
        myArray.push(item)
        input.value=""
        alert(`Added : ${item}`)
    }
    else{
        alert("PLEASE TYPE SOMETHING")
    }  
}
function showItem(){
    const list=document.getElementById("ShowInput")
    list.innerHTML=""
    for(let i=0;i<myArray.length;i++){
     const li = document.createElement("li")
     li.textContent=myArray[i]
     list.appendChild(li)
     console.log(list)
    }
}