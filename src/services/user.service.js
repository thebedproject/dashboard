import axios from 'axios'

export const userService = {
  loginRequest,
  logout
}

const loginRequest = async (email, password) => {
  console.log('hit')
  const response = await axios.post(
    "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/auth", {
      data: {
        route: "logIn",
        email,
        password
      }
    }
  )
  console.log(response.data)
  return response.data
}

function logout() {
  localStorage.removeItem('user');
}

export {
  loginRequest,
  logout
}
