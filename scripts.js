let inputs = document.querySelectorAll(".valor");


let url = 'https://v6.exchangerate-api.com/v6/3f49af7debeb1316f2928a4d/latest/USD';
fetch(url)
    .then(r => r.json())
    .then(data => {
          
    
        inputs.forEach(input => {
            input.value = input.dataset.cambio; 
        });
    })
    .catch(error => console.error(error))

function valorModificado(input){
    let factor = input.value / input.dataset.cambio;
    
    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2); 
    });
}



    