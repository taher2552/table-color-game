const table=document.querySelector('table');

document.addEventListener('click', handleClick)

const tdArr=[];


function handleClick(e){
    
    if(e.target.classList.contains("table-col")){
        if(tdArr.length>1){
            let rCol=tdArr.shift();
            rCol.classList.remove("red")
        }
        tdArr.push(e.target);
    }

    tdArr.forEach((e1)=>e1.classList.add("red"))
}




