var nome = window.prompt('Qual o seu nome?')  /*Faz uma pergunta*/
       window.confirm(`${nome}, se você quer um desconto, clica em OK.`) /*Pede uma confirmação*/

       window.alert('Agora vamos para o segundo SCRIPT!')

       var n1 = Number(window.prompt('Digite um preço:'))       /*A variável nome é do tipo NUMBER*/ 
       var n2 = Number(window.prompt('Digite o desconto:'))
       var s = n1-n2
       window.alert('Você vai pagar: ' + s.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'}) )    /*Retorna um alerta ou um resultado*/

       window.alert('Agora vamos para o terceiro SCRIPT!')

       var nome2 = window.prompt('Qual o nome do seu animal de estimação?')
       document.writeln(`${nome}, o nome do seu animal de estimação tem ${nome2.length} letras.`)
       document.writeln(`O nome do seu animal em maiúsculo é ${nome2.toUpperCase()}.`)
       document.write(`E o nome do seu animal em minúsculo é ${nome2.toLowerCase()}.`)