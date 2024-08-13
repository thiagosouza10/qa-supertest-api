import request from "supertest"
require('dotenv').config({ path: './api.env' })


export async function requestPost({ path, payload, status = 200 }) {
    const _response = await request(process.env.BASE_URL)
        .post(path)
        .send(payload)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    expect(_response.status).toEqual(status)
    return _response.body
}

export async function requestGet({ path, status = 200 }) {
    const _response = await request(process.env.BASE_URL)
        .get(path)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    expect(_response.status).toEqual(status)
    return _response
}