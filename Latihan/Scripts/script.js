const result = document.querySelector('#result')
const fibonacci = (x) => {
    let a = 0, b = 1, hasil = 0;
    while(hasil <= x * 10){
        hasil = a + b;
        a = b;
        b = hasil;
        result.innerHTML += `${a} `;
    }
}
const faktorial = (x) => {
    let a = x/2;
    let hasil = 1;
    for (let i = 1; i <= a; i++){
        hasil = hasil * i;
        result.innerHTML += `${i}`;
        if (i < a){
            result.innerHTML += ` x `
        }
    }
    result.innerHTML += ` = ${hasil}`;
}
const input = document.querySelector('input');
const cekInput = (x) => {
    let param = x.target.value;
    result.innerHTML = '';
    if (param <= 0 || param >= 21){
        input.style.border = '1px solid #ff563a';
        result.innerHTML = 'Pilih bilangan antara 1 sampai 20';
    } else {
        result.innerHTML = '';
        input.style.border = '1px solid #000';
        if (param%2 !== 0){
            fibonacci(param);
        } else {
            faktorial(param);
        }
    }
}
input.addEventListener('input', cekInput);