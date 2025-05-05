import http from 'k6/http'

//This is a SPIKE test from 0 to 200 USERs then back to 0
export const options = {
  stages: [
    { duration: '1m', target: 200 }, // fast ramp-up to a high point
    { duration: '30s', target: 0 },
  ],
}

export default function () {
  http.get('http://test.k6.io')
}

//k6 run --vus 10 --duration 30s .\k6test.js
//k6 run .\k6test.js
