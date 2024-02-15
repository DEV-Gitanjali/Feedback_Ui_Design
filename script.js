const   ratings=document.querySelectorAll('.rating')
const   sendBtn=document.querySelector('#send')
const   panel=document.querySelectorAll('#panel')


panel.addEventListener('click',(e)=>{

    if(e.target.classList.contains('rating')){
        e.target.parentNode.classList.add('active')

        removeActive()

        e.target.parentNode.classList.add('active')
    }
})


function removeActive(){
    
}