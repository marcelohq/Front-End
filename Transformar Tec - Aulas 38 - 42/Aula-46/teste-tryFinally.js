let a = 3;
let b = 3;

//tenta executar o bloco de código
try {

    let soma = a + cb ;
    console.log("Soma: ", soma);
    
//Em caso de erro executa o catch

} catch (error) {
    
    console.log("Erro: ", error);

//Vai ser executado de todo jeito
} finally{
    console.log("Fim da execução!");
}