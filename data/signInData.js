// SignIn Data

export default {
  username: {
    label: 'Email',
    placeholder: 'Enter Email',
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    validate: true
  },
  password: {
    label: 'Password',
    placeholder: 'Enter Password',
    value: null,
    type: 'password',
    error: null,
    min: 6,
    max: 30,
    req: null,
    validate: true
  }
}
