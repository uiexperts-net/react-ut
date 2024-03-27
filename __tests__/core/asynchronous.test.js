/**
 * @jest-environment node
 */

import { processUserData, processUserDataWithAPI, processUserDataWithCallback } from '../../src/core/asynchronous';
import { setupServer } from 'msw/node';
import { delay, http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost/api/user', async () => {
    await delay(150)
    return HttpResponse.json({ name: 'TestUser', contactNo: 4503430342 })
  })
]
const server = setupServer(...handlers)

describe('To validate Asynchronous Actions', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Validate async/await', async () => {
    const userData = { name: 'TestUser', contactNo: 4503430342 }
    const data = await processUserData();
    debugger;
    expect(data).toEqual(userData);
  })

  test('Validate Promise ', () => {
    const userData = { name: 'TestUser', contactNo: 4503430342 }
    return processUserData()
      .then(data => {
        expect(data).toEqual(userData)
      })
  });

  test('Validate Fetch Data using Rest API ', () => {
    const userData = { name: 'TestUser', contactNo: 4503430342 }
    return processUserDataWithAPI()
      .then(data => {
        expect(data).toEqual(userData)
      })
  });

  test.only('Validate callback ', (done) => {
    const userData = { name: 'TestUser', contactNo: 4503430342 }

    const cbFunction = (status, data) => {
      try {
        if (status === 'SUCCESS') {          
          expect(data).toEqual(userData)
          done();
        }
        else {
          done(status)
          console.error('Error')
          return;

        }
      }
      catch (error) {
        done(error)
      }


    }

    processUserDataWithCallback(cbFunction);
  });
});