export const capitalize = (habit) => {
    return habit[0].toUpperCase()+habit.slice(1)
}

export const todaysEpoch = () => {
    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth()+1
    const year = today.getFullYear()
    return new Date(`${month}/${date}/${year}`).getTime()
}

export const leapYear = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
