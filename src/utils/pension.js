const pension = (salary, callback) => {
    const pensionRate = 0.05
    const yearly = parseFloat(salary * pensionRate)
    const monthly = parseFloat(((salary * pensionRate) / 12).toFixed(2))
    const weekly = parseFloat(((salary * pensionRate) / 52).toFixed(2))
    const daily = parseFloat(((salary * pensionRate) / 355).toFixed(2))
    const hourly = parseFloat(((salary * pensionRate) / 1950).toFixed(2))
    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}


module.exports = pension