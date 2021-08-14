// Find Account Data

export default {
  email: {
    label: 'Email',
    placeholder: 'Enter Email',
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    validate: true
  }
}
