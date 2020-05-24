import includedDep from './include'

//Test

includedDep()

const something = 'Toby'
console.log(`Hello there ${something}`)

var data = null

var xhr = new XMLHttpRequest() // eslint-disable-line
xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === 4) {
    console.log(this.responseText)
  }
})

xhr.open('GET', 'https://www.strava.com/api/v3/athlete?access_token=1a2b9ee9411c36171bed5ef9b3a2f57ae4b30a05')
xhr.setRequestHeader('cache-control', 'no-cache')
xhr.setRequestHeader('Postman-Token', '359bace2-7c6f-4f9e-b37e-94d9827f2347')

xhr.send(data)
