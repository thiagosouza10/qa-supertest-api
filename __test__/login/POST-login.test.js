require('dotenv').config({ path: './api.env' })

import { pathUsuarios } from "../../environment/environment"
import { pathLogin } from "../../environment/environment"
import { requestPOST } from "../../helpers/utils/request"
import { fakerUsuario } from "../../helpers/utils/utils"


describe('POST login', () => {

    it('Deve efetuar login', async function () {
        //Cadastra novo usuário devido ser uma API de teste e não ter controle dos dados
        const _payload = await fakerUsuario("true")
        await requestPOST({ path: pathUsuarios, payload: _payload, status: 201 })
        //Efetua login
        const _payloadLogin = {
            email: _payload.email,
            password: _payload.password
        }
        const _responseLogin = await requestPOST({ path: pathLogin, payload: _payloadLogin })
        expect(_responseLogin.body.message).toEqual("Login realizado com sucesso")
        expect(_responseLogin.body.authorization).toMatch(/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/)
    })
})