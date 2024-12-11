const menuToggle=document.getElementById('open')
const closes=document.getElementById('close')
const sidebar=document.getElementById('sidebar')

menuToggle.addEventListener('click',()=>{
sidebar.classList.add('open')
})

closes.addEventListener('click',()=>(
    sidebar.classList.remove('open')
))

