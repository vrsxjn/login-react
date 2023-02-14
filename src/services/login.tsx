export const login = (email: string, senha: string): boolean => {
    let contaEmail = 'teste'
    let contaSenha = 'teste1'
    console.log(email, senha)

    if(email === contaEmail && senha === contaSenha) {
        alert('Bem vinda!')
        return true
    }else {
        alert('Email ou Senha errada')  
        return false
    }
    
}
