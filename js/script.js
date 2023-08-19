const nav=document.querySelector('.divi');
document.querySelector('#hamburger').onclick = () => {
    nav.classList.toggle('active');
};

const hamburger=document.querySelector('#hamburger');

document.addEventListener('click', function(a){
    if (!hamburger.contains(a.target)&&!nav.contains(a.target)) {
        nav.classList.remove('active');
    }
})

const buah=document.querySelector('.produk-buah');
const sayur=document.querySelector('.produk-sayur');

document.querySelector('#buah').onclick = () =>{
    buah.classList.remove('active');
    sayur.classList.remove('active');
}

document.querySelector('#sayur').onclick = () =>{
    buah.classList.add('active');
    sayur.classList.add('active');
}