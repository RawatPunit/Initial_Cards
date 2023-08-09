const panels = document.querySelectorAll('.panel') // give all panel or can say creates an array having all "panel"

// console.log(panel[0])
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}