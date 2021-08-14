// Data Valadation

export default (data, value) => {
  if (data[value.key] && (data[value.key].validate)) {
    data[value.key].error = null
    if (value.value !== '') {
      if (data[value.key].req && ['text'].indexOf(data[value.key].type) > -1) {
        if (data[value.key].req.test(value.value) || (data[value.key].type === 'number' && data[value.key].req.test(String(value.value).replace(/[^+\d]/g, '')))) {
          data[value.key].error = ''
        } else {
          data[value.key].error = 'The field is filled incorrectly'
        }
      } else {
        data[value.key].error = ''
      }
      if (data[value.key].error === '' && data[value.key].min && ['text','number'].indexOf(data[value.key].type) > -1) {
        if (String(value.value).length < data[value.key].min && data[value.key].type === 'text') {
          data[value.key].error = 'Min. ' + data[value.key].min + ' characters'
        }
        if (value.value < data[value.key].min && data[value.key].type === 'number') {
          data[value.key].error = 'Min. ' + data[value.key].min
        }
      }
      if (['select','file'].indexOf(data[value.key].type) > -1) {
        data[value.key].error = ''
        if (data[value.key].required) {
          if (value.value === '' || value.value === null) {
            data[value.key].error = data[value.key].type === 'file' ? 'Upload file' : 'Select a value'
          }
        }
      }
      if (['password'].indexOf(data[value.key].type) > -1) {
        if (value.value.length > data[value.key].min) {
          data[value.key].error = ''
        } else {
          data[value.key].error = 'The field is filled incorrectly'
        }
        if (/[a-z]/.test(value.value) && /[\d]/.test(value.value)) {
          data[value.key].error = ''
        } else {
          data[value.key].error = 'The field is filled incorrectly'
        }
        if (/[A-Z]/.test(value.value)) {
          data[value.key].error = ''
        } else {
          data[value.key].error = 'The field is filled incorrectly'
        }
        if (/[.,:;?!*+%\-<>@[\]{}/\\_$#]/g.test(value.value)) {
          data[value.key].error = ''
        } else {
          data[value.key].error = 'The field is filled incorrectly'
        }
      }
      if (data[value.key].error === '' && data[value.key].repeat) {
        if (String(value.value) !== String(data[data[value.key].repeat].value)) {
          if (data[value.key].repeatHide === false) {
            data[value.key].error = data[value.key].repeatError
          }
          if (data[data[value.key].repeat].repeatHide === false) {
            data[data[value.key].repeat].error = data[value.key].repeatError
          }
        } else {
          data[data[value.key].repeat].error = ''
        }
      }
    }
  }
  if (['chips','arrayText'].indexOf(data[value.key].type) > -1) {
    data[value.key].value = value.value.filter(item => item)
  } else if (['tags'].indexOf(data[value.key].type) > -1) {
    data[value.key].value = value.value.filter(item => item)
  } else {
    data[value.key].value = value.value
  }
  return {...data}
}
