const express = require('express')
const cors = require('cors')

const grossPay = require('./utils/gross')
const pensionAmount = require('./utils/pension')
const niPay = require('./utils/ni')
const taxablePay = require('./utils/taxablepay')
const incomeTax = require('./utils/incomeTax')
const netPay = require('./utils/netpay')


const app = express()
app.use(cors())
const port = process.env.PORT || 3002


app.get('*', (req, res) => {
    const annualPay = req.query.annualPay;
    if (!annualPay) {
        return res.send('Enter salary')
    }
    const gross = grossPay(annualPay)
    const pension = pensionAmount(annualPay)
    const nationalinsurance = niPay(annualPay)
    const taxableincome = taxablePay(annualPay)
    const incometax = incomeTax(annualPay)
    const netpay = netPay(annualPay)
    res.send({
        salary: annualPay,
        gross,
        pension,
        nationalinsurance,
        taxableincome,
        incometax,
        netpay
    })

})


app.listen(port, () => {
    console.log('server running on port: ' + port)
})