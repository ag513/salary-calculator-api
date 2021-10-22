const incomeTax = (salary) => {
    const incomeTaxRate_a = 0.2
    //  const incomeTaxRate_b = 0.4
    //   const incomeTaxRate_c = 0.45
    const personalAllowance = 12570
    //  const baseRate = 50270
    //   const higherRate = 150000
    let incomeTax, tax_a, tax_b, tax_c, yearly, monthly, weekly, daily, hourly

    // if (salary <= personalAllowance) {
    //     incomeTax = 0
    // } else if (salary > personalAllowance && salary <= baseRate) {
    //     incomeTax = (salary - personalAllowance) * incomeTaxRate_a 
    // } else if (salary > baseRate && salary <= higherRate) {
    //     let a = (salary - baseRate) * incomeTaxRate_b
    //     let b = (salary - personalAllowance) * incomeTaxRate_a 
    // } else if (salary > higherRate) {

    // }

    if (salary <= personalAllowance) {
        incomeTax = 0
        yearly = 0
        monthly = 0
        weekly = 0
        daily = 0
        hourly = 0
    } else {
        incomeTax = (salary - personalAllowance) * incomeTaxRate_a
        yearly = parseFloat(incomeTax.toFixed(2))
        monthly = parseFloat(((incomeTax) / 12).toFixed(2))
        weekly = parseFloat(((incomeTax) / 52).toFixed(2))
        daily = parseFloat(((incomeTax) / 355).toFixed(2))
        hourly = parseFloat(((incomeTax) / 1950).toFixed(2))
    }

    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}


module.exports = incomeTax