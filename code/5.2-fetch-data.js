///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'LOREMOORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    const msg = response
      .sort((a, b) => a.currentIndex - b.currentIndex)
      .map(tx => tx.signatureMessageFragment)
      .join('')

    console.log('Nachricht in Tryte:')
    console.log(msg)

    //Convert trytes to plan text
    const data = Converter.trytesToAscii(msg + 9)
    console.log('Nachricht in Ascii:')
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
