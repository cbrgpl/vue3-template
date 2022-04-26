import { API_URL } from 'consts'

const orderApiModule = [
  {
    method: 'POST',
    url: API_URL + '/orders/',
    secure: false,
    roles: [],
    handler: 'orderCreate',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    schema: {
      type: 'object',
      required: [ 'firstName', 'lastName', 'street', 'city', 'country', 'instagramUrl', 'height', 'bustType' ],
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        street: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        country: {
          type: 'string'
        },
        instagramUrl: {
          type: 'string'
        },
        height: {
          type: 'number'
        },
        age: {
          type: 'number'
        }
      }
    }
  },
  {
    method: 'POST',
    url: API_URL + '/order-items/',
    secure: false,
    roles: [],
    handler: 'orderItemsCreate',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    schema: {
      type: 'array',
    }
  },
  {
    method: 'POST',
    url: API_URL + '/order-measures/',
    secure: false,
    roles: [],
    handler: 'orderMeasuresCreate',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    schema: {
      type: 'array',
    }
  },
]

export default orderApiModule