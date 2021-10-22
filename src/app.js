const express = require('express')
const grossPay = require('./utils/gross')
const pensionAmount = require('./utils/pension')
const niPay = require('./utils/ni')
const taxablePay = require('./utils/taxablepay')
const incomeTax = require('./utils/incomeTax')
const netPay = require('./utils/netpay')

const app = express()
const port = process.env.PORT || 3002


app.get('/', (req, res) => {
    const annualPay = req.query.annualPay;
    if (!annualPay) {
        return res.send('Enter salary')
    }
    const gross = grossPay(req.query.annualPay)
    const pension = pensionAmount(req.query.annualPay)
    const nationalinsurance = niPay(req.query.annualPay)
    const taxableincome = taxablePay(req.query.annualPay)
    const incometax = incomeTax(req.query.annualPay)
    const netpay = netPay(req.query.annualPay)
    res.send({
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