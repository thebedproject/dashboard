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
  const user = handleResponse(response.data)

  if (user.token) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user
}

function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  if (response.status !== 200) {
    if (response.status === 401) {
      logout();
      location.reload(true);
    }

    const error = response.error || 'Unauthorised';
    return Promise.reject(error);
  }

  return response;
}

export {
  loginRequest,
  logout
}
