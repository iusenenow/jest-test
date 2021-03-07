import axios from 'axios'

export const fetchData = fn => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    fn(response.data)
  })
}