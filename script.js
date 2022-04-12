let valores = []

function adicionar(){
    
    let num = document.querySelector('#num1')
    let text = document.querySelector('#add')
    let but = document.querySelector('#botao')
    let resul = document.querySelector('.resultado')

        if (num.value.length == 0 || num.value > 10 || num.value <=0 ){
            alert('[ERRO] Verifique os dados inseridos!')
        } else {
            let add = (num.value)
            valores.push(add)
            text.innerHTML += `Valor ${add} adicionado!\n`
        }
        num.value = ''
        num.focus()
        resul.innerHTML = ''
        
}     

function finalizar(){        
        let resul = document.querySelector('.resultado')
    
        if(valores.length == 0){
            alert('[ERRO] Adicione valores antes de continuar!')
        }
        else if (valores.length == 1){
            resul.innerHTML = `Ao todo temos 1 número cadastrado! Seu valor é ${valores}!`
        } else {
           
            let menor = valores.sort()[0]
            let maior = valores.sort()[valores.length -1]
            let total = 0
            
            for(let i = 0; i < valores.length; i++){
                if (valores[i] >= 0) {
                    total += Number(valores[i])
                } 
            }  

            resul.innerHTML = `Ao todo temos ${valores.length} números cadastrados!</br>` 
            resul.innerHTML += `Os números adicionados são: ${valores.join('-')}</br>`
            resul.innerHTML += `O menor valor é: ${menor}</br>`
            resul.innerHTML += `O maior valor é: ${maior}</br>`
            resul.innerHTML += `A soma dos valores é: ${total}</br>`
            resul.innerHTML += `A média dos valores inseridos é: ${total/valores.length}`
    
        }    
                   
}