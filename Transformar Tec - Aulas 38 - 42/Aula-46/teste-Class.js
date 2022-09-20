//declarando uma classe ErroFormulario que recebe (herda) atributos e métodos da classe Error (classe pai)
class ErroFormulario extends Error{
    //método para construir um objeto da classe ErroFormulario
    constructor(name, message){
        
        //sobrescrevendo o valor da propriedade (atributo) message com o valor que vem do erro da função
        super(message)

        //atribuindo um valor para a propriedade (atributo) name com o nome personalizado do erro
        this.name = name
    }
}


try {

    let nome = "Cassiano"
    let idade = 32
    //forçando erro de variável sem valor
    let profissao

    if(!nome || !idade || !profissao){

        let erroFormulario = new ErroFormulario("ErroFormulario","Campos em branco não permitidos")

        throw erroFormulario

    }else{
        console.log("Usuário cadastrado!")
    }

    
} catch (erro) {
    console.log(erro)
}
