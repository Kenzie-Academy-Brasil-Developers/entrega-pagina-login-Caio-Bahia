const buttonToggleModal = document.querySelectorAll("[data-modal-control]")

for(let index = 0;index < buttonToggleModal.length;index++){
    buttonToggleModal[index].addEventListener("click",function(){
        let valueDataModalControl = buttonToggleModal[index].getAttribute("data-modal-control")
       document.getElementById(valueDataModalControl).classList.toggle("show-modal")
        console.log()
    })
}

// ABEIA

const hideBee = document.getElementsByClassName("button-login")[0]
console.log(hideBee)
const bee =  document.querySelector("#bee-img")

hideBee.addEventListener("mouseenter", ()=>{
    bee.classList.remove("hidden-bee")

})
hideBee.addEventListener("mouseleave", ()=>{
    bee.classList.add("hidden-bee")

})

