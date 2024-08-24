require('dotenv').config({ path: './api.env' })

import { pathUsuarios } from "../../environment/environment"
import { requestGET } from "../../helpers/utils/request"


describe('GET usuarios', () => {

    it('Deve retornar todos os usuários', async function () {
        await requestGET({ path: pathUsuarios })
    })
})