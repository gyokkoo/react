const baseUrl = 'http://localhost:5000/auth'

const getOptions = () => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonRespone = res => res.json

class UserData {
  static register (user) {
    const options = getOptions()
    options.body = JSON.stringify(user)

    return window
      .fetch(`${baseUrl}/signup`, options)
      .then(handleJsonRespone)
  }

  static login (user) {
    const options = getOptions()
    options.body = JSON.stringify(user)

    return window
      .fetch(`${baseUrl}/login`, options)
      .then(handleJsonRespone)
  }
}

export default UserData
