// const baseUrl = 'http://localhost:5000/auth'

// const getOptions = () => ({
//   method: 'POST',
//   mode: 'cors',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

// const handleJsonRespone = (res) => res.json

class UserData {
  static register (user) {
    return window.fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  }

  static login (user) {
    return window.fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  }
}

export default UserData
