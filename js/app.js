const adayi = document.getElementById('menu-btn')
const aside = document.getElementById('aside')

document.getElementById('menu-btn').addEventListener('click', navToggle)
    function navToggle (){
        adayi.classList.toggle('open')
        aside.classList.toggle('translate-x-[100%]')
        aside.classList.toggle('show-sidebar')
    }

//Scroll interation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElement = document.querySelectorAll('.work')
const jagoElement = document.querySelectorAll('.ogah')
hiddenElement.forEach((el) => observer.observe(el))
jagoElement.forEach((el) => observer.observe(el))