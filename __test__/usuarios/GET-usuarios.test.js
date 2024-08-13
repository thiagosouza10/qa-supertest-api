require('dotenv').config({ path: './api.env' })

import { pathUsuarios } from "../../environment/environment"
import { requestGet } from "../../helpers/utils/request"


describe('GET usuarios', () => {

    it('Deve retornar todos os usuários', async function () {
        await requestGet({ path: pathUsuarios })
    })

})