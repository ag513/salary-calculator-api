const taxablePay = (salary) => {
    const baseTaxBand = 12570
    let taxablePay = 0
    let yearly, monthly, weekly, daily, hourly
    if (salary > baseTaxBand) {
        taxablePay = salary - baseTaxBand
        yearly = parseFloat(taxablePay.toFixed(2))
        monthly = parseFloat(((taxablePay) / 12).toFixed(2))
        weekly = parseFloat(((taxablePay) / 52).toFixed(2))
        daily = parseFloat(((taxablePay) / 355).toFixed(2))
        hourly = parseFloat(((taxablePay) / 1950).toFixed(2))
    }
    else {
        taxablePay = salary
        yearly = parseFloat(taxablePay.toFixed(2))
        monthly = parseFloat(((taxablePay) / 12).toFixed(2))
        weekly = parseFloat(((taxablePay) / 52).toFixed(2))
        daily = parseFloat(((taxablePay) / 355).toFixed(2))
        hourly = parseFloat(((taxablePay) / 1950).toFixed(2))
    }

    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}

module.exports = taxablePay