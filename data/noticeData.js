// Reservation Data

export default {
  title: {
    label: 'Title',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 50,
    req: /[A-ZА-Яa-zа-я0-9]/,
    validate: true
  },
  description: {
    label: 'Description',
    placeholder: null,
    value: null,
    type: 'textarea',
    error: null,
    min: 3,
    max: 350,
    req: /[A-ZА-Яa-zа-я0-9]/,
    validate: true
  }
}
