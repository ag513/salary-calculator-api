const ni = (salary) => {
    const NIRate = 0.12;
    const NIConcPay = 9568
    if (salary > NIConcPay) {
        const NITaxableIncome = salary - NIConcPay
        const NIForTaxableIncome = NITaxableIncome * NIRate
        let yearly = parseFloat(NIForTaxableIncome.toFixed(2))
        let monthly = parseFloat(((NIForTaxableIncome) / 12).toFixed(2))
        let weekly = parseFloat(((NIForTaxableIncome) / 52).toFixed(2))
        let daily = parseFloat(((NIForTaxableIncome) / 355).toFixed(2))
        let hourly = parseFloat(((NIForTaxableIncome) / 1950).toFixed(2))
        return {
            yearly,
            monthly,
            weekly,
            daily,
            hourly
        }
    } else {
        let NIForTaxableIncome = salary * NIRate
        let yearly = parseFloat(NIForTaxableIncome)
        let monthly = parseFloat(((NIForTaxableIncome) / 12).toFixed(2))
        let weekly = parseFloat(((NIForTaxableIncome) / 52).toFixed(2))
        let daily = parseFloat(((NIForTaxableIncome) / 355).toFixed(2))
        let hourly = parseFloat(((NIForTaxableIncome) / 1950).toFixed(2))
        return {
            yearly,
            monthly,
            weekly,
            daily,
            hourly
        }
    }
}


module.exports = ni;