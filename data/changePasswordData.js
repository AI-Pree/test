// Change Password Data

export default {
  password: {
    label: 'Password',
    placeholder: 'Enter password',
    text: "* Password must consist of at least 8 digits, including 2 types of English uppercase, lowercase, numeric, and special characters.",
    repeat: 'password_repeat',
    repeatError: 'Password mismatch',
    repeatHide: true,
    value: null,
    type: 'password',
    error: null,
    min: 8,
    max: 30,
    req: null,
    validate: true
  },
  password_repeat: {
    label: 'Confirm Password',
    placeholder: 'Confirm password',
    repeat: 'password',
    repeatError: 'Password mismatch',
    repeatHide: false,
    value: null,
    type: 'password',
    error: null,
    min: 8,
    max: 30,
    req: null,
    validate: true
  }
}
