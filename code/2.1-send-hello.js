///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D'
const seed =
  'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

const transfers = [
  {
    value: 0,
    address: address,
    tag: 'KLULTWYK9FP'
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  })
