import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('teste','teste1')
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})