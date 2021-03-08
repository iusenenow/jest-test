import { fetchData, fetchTwoData } from './fetchData';

test('fetchData', done => {
  fetchData(data => {
    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    })
    done()
  })
})

test('fetchTwoData', async () => {
  const { data } = await fetchTwoData()
  expect(data).toEqual({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  });
})