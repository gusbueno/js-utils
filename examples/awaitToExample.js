import axios from 'axios'
import { to } from '../dist'

const getUsers = async () => {
  const [err, data] = await to(axios.get('http://host.com/api/users'))
  if (err) { // which means that err has value
    return 'An error ocurred on getUsers request'
  }
  // if err has no value then data has value
  return data
}