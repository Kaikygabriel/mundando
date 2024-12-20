function menu(){
    const s1 = document.getElementById('s1')
    const s11 = document.getElementById('s11')

    if(s1.style.height =='40px'){
        s11.style.left ='0%'
        s1.style.height ='41px'
    } else if(s1.style.height =='41px'){
        s11.style.left ='-100%'
        s1.style.height = '40px'
    }
}