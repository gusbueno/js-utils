[![CircleCI](https://circleci.com/gh/gusbueno/js-utils/tree/master.svg?style=svg)](https://circleci.com/gh/gusbueno/js-utils/tree/master)


# js-utils
Javascript utilities that you can use in your day-to-day development

#### arrayToObject
This function will help you to convert an array of objects to one object(key/value).

Example:
```js
import { arrayToObject } from '@gusbueno/js-utils'

const data = [
  {
    name: 'BTC',
    value: 6000
  }, {
    name: 'XRP',
    value: 0.34
  }
]

const objectData = arrayToObject(data, 'name')

/* RESULT
{
  BTC: {
    name: 'BTC',
    value: 6000
  },
  XRP: {
    name: 'XRP',
    value: 0.34
  }
}
 */
```

#### to
This function will help you to handle errors from **async/await** operator.

Example:
```js
import axios from 'axios'
import { to } from '@gusbueno/js-utils'

const getUsers = async () => {
  const [err, data] = await to(axios.get('http://host.com/api/users'))
  if (err) { // which means that err has value
    return 'An error ocurred on getUsers request'
  }
  // if err has no value then data has value
  return data
}
```
