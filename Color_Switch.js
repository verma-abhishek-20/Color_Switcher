        let body=document.querySelector("body");
        let boxes=document.querySelectorAll(".box")
    
        boxes.forEach(function(box){
            console.log(box)
           
            box.addEventListener("click",function(event){
                console.log(event)
                console.log(event.target.id)

                if(event.target.id=="red"){
                    body.style.backgroundColor="red";
                }

                  if(event.target.id=="green"){
                    body.style.backgroundColor="green";
                }

                  if(event.target.id=="blue"){
                    body.style.backgroundColor="blue";
                }

                let h3=document.querySelector("h3");
                h3.style.color="white"
            })
        })

