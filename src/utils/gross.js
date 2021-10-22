const gross = (salary, callback) => {
    const yearly = parseFloat(salary)
    const monthly = parseFloat((salary / 12).toFixed(2))
    const weekly = parseFloat((salary / 52).toFixed(2))
    const daily = parseFloat((salary / 355).toFixed(2))
    const hourly = parseFloat((salary / 1950).toFixed(2))
    return {
        yearly,
        monthly,
        weekly,
        daily,
        hourly
    }
}


module.exports = gross