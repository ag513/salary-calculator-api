const ni = (salary) => {
    const NIRate = 0.12;
    const NIConcPay = 9568
    let yearly, monthly, weekly, daily, hourly

    if (salary > NIConcPay) {
        const NITaxableIncome = salary - NIConcPay
        const NIForTaxableIncome = NITaxableIncome * NIRate
        yearly = parseFloat(NIForTaxableIncome.toFixed(2))
        monthly = parseFloat(((NIForTaxableIncome) / 12).toFixed(2))
        weekly = parseFloat(((NIForTaxableIncome) / 52).toFixed(2))
        daily = parseFloat(((NIForTaxableIncome) / 355).toFixed(2))
        hourly = parseFloat(((NIForTaxableIncome) / 1950).toFixed(2))
    } else {
        let NIForTaxableIncome = salary * NIRate
        yearly = parseFloat(NIForTaxableIncome)
        monthly = parseFloat(((NIForTaxableIncome) / 12).toFixed(2))
        weekly = parseFloat(((NIForTaxableIncome) / 52).toFixed(2))
        daily = parseFloat(((NIForTaxableIncome) / 355).toFixed(2))
        hourly = parseFloat(((NIForTaxableIncome) / 1950).toFixed(2))
    }
    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}


module.exports = ni;