let boxes = document.querySelectorAll(".box")
let para = document.getElementById("para")
let btn = document.getElementById("btn")



let win_patterns = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];




let  turnO=true;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.innerText==="")
        if(turnO)
        {
                box.innerText="O"
                turnO=false
        }
        else
        {
        box.innerText="X"
        turnO=true;
        }
        
        checkwiner();
    })
})

const checkwiner= ()=>{
    for(let pattern of win_patterns)
    {
         let posval1 = boxes[pattern[0]].innerText 
         let posval2 = boxes[pattern[1]].innerText 
         let posval3 = boxes[pattern[2]].innerText 
         if(posval1!="" && posval2!="" && posval3!="")
         {
            if(posval1 === posval2 && posval2 === posval3)
            {
                para.innerText=` 🥳winner is ${posval1}🥳`
              
               disablebtn();
              
            }
            
            
            
         }
        
    }
}

//function to stop the game and restart also 
//for stop giving values after winner is defined 
const disablebtn = ()=>
    {
        for(box of boxes)
        {
            box.disabled=true;
        }
    }

//for restarting the game     

const newgame = ()=>
    {
        for(box of boxes)
        {
            box.disabled=false;
            box.innerText=" ";
            para.innerText=" "
        }
    }



btn.addEventListener('click',newgame
   
    )   
