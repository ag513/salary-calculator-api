const pensionAmount = require('./pension')
const niPay = require('./ni')
const incomeTax = require('./incomeTax')


const netPay = (salary) => {
    let netPay = 0
    let yearly, monthly, weekly, daily, hourly
    const pension = pensionAmount(salary).yearly
    const ni = niPay(salary).yearly
    const tax = incomeTax(salary).yearly
    netPay = salary - (pension + ni + tax)
    yearly = parseFloat(netPay)
    monthly = parseFloat((netPay / 12).toFixed(2))
    weekly = parseFloat((netPay / 52).toFixed(2))
    daily = parseFloat((netPay / 355).toFixed(2))
    hourly = parseFloat((netPay / 1950).toFixed(2))
    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}

module.exports = netPay