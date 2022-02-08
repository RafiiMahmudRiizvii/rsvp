const form = document.querySelector("#registrar");
const ul = document.querySelector("#invitedList");
const confirmCheck = document.querySelector("#confirmCheck");
const checkDiv = document.querySelector(".checkDiv");
const input= form.querySelector("input");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
   const userName = input.value;
   const li = document.createElement("li");
   li.innerHTML =` 
   <span>${userName}</span>
   <label for="">Connected <input type="checkbox"></label>
   <button>Edit</button>
   <button>Remove</button>`
   ul.append(li);
   input.value=""
})

ul.addEventListener("click",(e)=>{
    const target = e.target;
    const li = target.parentNode.parentNode;
    if(target.checked){
      li.classList.add("responded")
    }else{
      li.classList.remove("responded")
    }
})
ul.addEventListener("click",(e)=>{
    const target = e.target;
    const li = target.parentNode;
    if(target.nodeName === "BUTTON"){
        if (target.textContent == "Edit") {
            const span = li.firstElementChild;
            const value = span.textContent;
            const input = document.createElement("input");
            input.type = "text"
            input.value = value;
            li.prepend(input);
            span.remove();
            target.textContent = "Save"
        } else if (target.textContent == "Remove") {
            li.remove();
        }
        else  if (target.textContent == "Save") {
            const input = li.firstElementChild;
            const value = input.value;
            const span = document.createElement("span");
            span.textContent = value;
            li.prepend(span);
            input.remove();
            target.textContent = "Edit"
        }
    }
})
checkDiv.addEventListener("click",(e)=>{
    const checkBox =e.target;
    const li = ul.querySelectorAll("li")
    if(checkBox.nodeName === "INPUT"){
        if(checkBox.checked){
           li.forEach((item)=>{
               if(item.classList.contains("responded")){
                  item.style.display = "block"
               }else{
                item.style.display = "none" 
               }
           })
           
           
        }else if(!checkBox.checked){
            li.forEach((item)=>{
                
                 item.style.display = "block" 
                
            })

        }
    }
})    

    

   



    
   
            
            
            

            
            
            
            

   
        


