import axios from 'axios'

export const userService = {
  loginRequest,
  logout
}

const loginRequest = async (email, password) => {
  const response = await axios.post(
    "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/auth", {
      data: {
        route: "logIn",
        email,
        password
      }
    }
  )
  return response.data
}

const signUpRequest = async (name, email, password) => {
  const response = await axios.post(
    "https://hdpkjgu3s9.execute-api.eu-west-2.amazonaws.com/test/auth", {
      data: {
        route: "signUp",
        email,
        name,
        password
      }
    }
  )
  return response.data
}

function logout() {
  localStorage.removeItem('user');
}

export {
  loginRequest,
  logout,
  signUpRequest
}
