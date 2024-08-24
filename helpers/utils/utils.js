import { faker } from '@faker-js/faker'

export async function fakerUsuario(administrador) {
    return {
        "nome": faker.person.fullName(),
        "email": faker.internet.email(),
        "password": "teste",
        "administrador": administrador
    }
}