// Reservation Data

export default {
  myage: {
    label: 'My age',
    placeholder: null,
    value: null,
    type: 'number',
    error: null,
    min: 1,
    max: 99,
    req: /[^+\d]/g,
    validate: false
  },
  childage: {
    label: 'Child age',
    placeholder: null,
    value: null,
    type: 'number',
    error: null,
    min: 1,
    max: 99,
    req: /[^+\d]/g,
    validate: false
  },
  childgender: {
    label: 'Child gender',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: /[A-Za-zА-Яа-я0-9]/,
    validate: true
  },
  dualincome: {
    label: 'Are you dual-income?',
    placeholder: null,
    value: false,
    type: 'radio',
    radioColumn: true,
    items: [
      {name: 'Yes', value: true},
      {name: 'No', value: false},
    ],
    error: null,
    min: null,
    max: null,
    req: null,
    validate: true
  },
  primary: {
    label: 'Who is the primary caregiver for children?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  follow: {
    label: 'Who does your child follow?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  talking: {
    label: 'How much time does your child spend talking per day?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  eventsday: {
    label: 'How long has it been since the event occurred?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  eventstoday: {
    label: 'Has the incident continued to this day?',
    placeholder: null,
    value: null,
    type: 'radio',
    radioColumn: true,
    items: [
      {name: 'Yes', value: true},
      {name: 'No', value: false},
    ],
    error: null,
    min: null,
    max: null,
    req: null,
    validate: true
  },
  sexcounseling: {
    label: 'Whether or not to use sexual counseling',
    placeholder: null,
    value: null,
    type: 'radio',
    radioColumn: true,
    items: [
      {name: 'Yes', value: true},
      {name: 'No', value: false},
    ],
    error: null,
    min: null,
    max: null,
    req: null,
    validate: true
  },
  mostlike: {
    label: 'What would you most like to achieve through counseling?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  solve: {
    label: 'What do you want to solve the most?',
    placeholder: null,
    value: null,
    type: 'text',
    error: null,
    min: 3,
    max: 30,
    req: null,
    validate: true
  },
  concerns: {
    label: 'Please write down your concerns in detail.',
    placeholder: null,
    value: null,
    type: 'textarea',
    error: null,
    min: 3,
    max: 200,
    req: null,
    validate: true
  },
  notified: {
    label: 'Choose how you want to be notified about consultations',
    placeholder: null,
    value: null,
    type: 'radio',
    radioColumn: true,
    items: [
      {name: 'KakaoTalk', value: 'kakaoTalk'},
      {name: 'Text message', value: 'textMessage'},
      {name: 'Not received', value: 'notReceived'}
    ],
    error: null,
    min: null,
    max: null,
    req: null,
    validate: true
  },
}
