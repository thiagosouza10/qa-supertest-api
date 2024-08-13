require('dotenv').config({ path: './api.env' })

import { payloadLoginAdmin } from "../../api/payload/POST-login-admin"
import { pathLogin } from "../../environment/environment"
import { requestPost } from "../../helpers/utils/request"


describe('POST login', () => {

    it('Deve efetuar login', async function () {
        const _response = await requestPost({ path: pathLogin, payload: payloadLoginAdmin })
        expect(_response.message).toEqual("Login realizado com sucesso")
        expect(_response.authorization).toMatch(/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/)
    })

})