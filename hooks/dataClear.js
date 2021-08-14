// Clear Data

export default (data) => {
  Object.keys(data).forEach(key => {
    data[key].value = null
    data[key].error = null
  })
  return {...data}
}
