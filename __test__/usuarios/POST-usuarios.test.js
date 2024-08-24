require('dotenv').config({ path: './api.env' })

import { pathUsuarios } from "../../environment/environment"
import { requestPOST } from "../../helpers/utils/request"
import { fakerUsuario } from "../../helpers/utils/utils"


describe('POST usuarios', () => {

    it('Deve cadastrar um novo usuário', async function () {
        const _payload = await fakerUsuario("true")
        const _response = await requestPOST({ path: pathUsuarios, payload: _payload, status: 201 })
        expect(_response.body).toHaveProperty('message', 'Cadastro realizado com sucesso')
    })
})