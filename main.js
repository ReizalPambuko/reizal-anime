    const naruto = document.querySelector('.naruto');
    const mov1 = document.querySelector('.mov-1');
    const close = document.querySelector('.c1')
    naruto.addEventListener('click',function(){
    mov1.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close){
    mov1.classList.add('active')
    }
    })

    const lookism = document.querySelector('.lookism');
    const mov2 = document.querySelector('.mov-2');
    const close2 = document.querySelector('.c2')
    lookism.addEventListener('click',function(){
    mov2.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close2){
    mov2.classList.add('active')
    }
    })

    const demon = document.querySelector('.demon');
    const mov3 = document.querySelector('.mov-3');
    const close3 = document.querySelector('.c3')
    demon.addEventListener('click',function(){
    mov3.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close3){
    mov3.classList.add('active')
    }
    })

    const boku = document.querySelector('.boku');
    const mov4 = document.querySelector('.mov-4');
    const close4 = document.querySelector('.c4')
    boku.addEventListener('click',function(){
    mov4.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close4){
    mov4.classList.add('active')
    }
    })


    const bleach = document.querySelector('.bleach');
    const mov5 = document.querySelector('.mov-5');
    const close5 = document.querySelector('.c5')
    bleach.addEventListener('click',function(){
    mov5.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close5){
    mov5.classList.add('active')
    }
    })



    const blue = document.querySelector('.blue');
    const mov6 = document.querySelector('.mov-6');
    const close6 = document.querySelector('.c6')
    blue.addEventListener('click',function(){
    mov6.classList.remove('active')
    })
    window.addEventListener('click',function(e){
    if(e.target === close6){
    mov6.classList.add('active')
    }
    })
