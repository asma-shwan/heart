let bodyEl=document.querySelector("body")
bodyEl.addEventListener("mousemove",function(event){
    let x=event.offsetX
    let y=event.offsetY
    const newDiv=document.createElement("div")
    newDiv.style.left=x+"px"
    newDiv.style.top=y+"px"
    const randomsize=Math.random()*100
    newDiv.style.width=randomsize+"px"
    newDiv.style.height=randomsize+"px"
    bodyEl.appendChild(newDiv)
    setTimeout(()=>{
        newDiv.remove()
    },4000)
}) 