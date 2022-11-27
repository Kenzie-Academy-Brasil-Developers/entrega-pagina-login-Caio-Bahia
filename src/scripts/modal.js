const buttonToggleModal = document.querySelectorAll("[data-modal-control]")

for(let index = 0;index < buttonToggleModal.length;index++){
    buttonToggleModal[index].addEventListener("click",function(){
        let valueDataModalControl = buttonToggleModal[index].getAttribute("data-modal-control")
       document.getElementById(valueDataModalControl).classList.toggle("show-modal")
        console.log()
    })
}
