export const capitalize = (habit) => {
    return habit[0].toUpperCase() + habit.slice(1)
}

export const todaysEpoch = () => {
    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    return new Date(`${month}/${date}/${year}`).getTime()
}

export const leapYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

export const getCurrentStreak = (calendar) => {

    let tempCalendar = calendar.filter((item) => item.value !== 0)
    let newCalendar = []
    for (let i = 0; i < tempCalendar.length; ++i) {
        let flag = false
        for (let j = i + 1; j < tempCalendar.length; ++j) {
            if (tempCalendar[j].epoch === tempCalendar[i].epoch) {
                flag = true
                break
            }
        }
        if (!flag)
            newCalendar.push(tempCalendar[i])
    }
    calendar = newCalendar

    calendar = calendar.sort(function (a, b) { return a.epoch - b.epoch })
    let tEpoch = todaysEpoch()
    let flag = 0
    let value = 0

    for (let i = 0; i < calendar.length; ++i) {
        if (calendar[i].epoch === tEpoch) {
            flag = 1
            value = calendar[i].value
            break
        }
    }

    let yEpoch = tEpoch - 1000 * 60 * 60 * 24

    let index = -1
    for (let i = 0; i < calendar.length; ++i) {
        if (calendar[i].epoch === yEpoch) {
            index = i
            break
        }
    }
    let str = 0
    if (index !== -1 && calendar[index].value) {
        let cnt = 1
        for (let i = index; i >= 1; --i) {
            if (calendar[i].epoch - calendar[i - 1].epoch === 1000 * 60 * 60 * 24 && calendar[i].value)
                ++cnt
            else
                break
        }
        str += cnt
    }
    if (flag && value)
        str += 1
    // console.log(calendar,flag)
    // alert(str)
    return str
}

export const getMaxStreak = (calendar) => {
    calendar = calendar.sort(function (a, b) { return a.epoch - b.epoch })

    // console.log(calendar.length)
    // console.log(new Date(calendar[5].epoch));
    // console.log(new Date(calendar[0].epoch));
    // console.log(new Date(calendar[1].epoch).getTime()-new Date(calendar[0].epoch).getTime()===1000*60*60*24);
    let mx = 0
    for (let i = 0; i < calendar.length; ++i) {
        if (!calendar[i].value)
            continue
        let cnt = 1
        for (let j = i + 1; j < calendar.length; ++j) {
            if (calendar[j].epoch - calendar[j - 1].epoch === 1000 * 60 * 60 * 24 && calendar[j].value)
                ++cnt
            else
                break
        }
        // console.log(cnt);
        mx = Math.max(mx, cnt)
        // if(cnt>mx)
        //     mx=cnt

    }
    // console.log("max streak",mx);
    return mx
}


export const denomiator = (streak) => {
    if (streak < 10)
        return 10
    if (streak < 30)
        return 30
    if (streak < 50)
        return 50
    if (streak < 100)
        return 100
    return 180
}

export const isDoneToday = (calendar) => {
    for (let i = 0; i < calendar.length; ++i)
        if (calendar[i].epoch === todaysEpoch() && calendar[i].value)
            return true
    return false
}

export const getBackgroundColor = (val, calendar) => {
    let mx = 0
    for (let i = 0; i < calendar.length; ++i) {
        if (calendar[i].value > mx) {
            mx = calendar[i].value
        }
    }
    let l1 = mx * .25
    let l2 = mx * .5
    let l3 = mx * .75
    val = parseInt(val)
    if (!val)
        return '#fff'




    // Shades of blue
    if (getGridTheme() === 'blue') {
        if (val < l1) {
            return '#a6dcef';
        }
        if (val < l2) {
            return '#6cb2eb';
        }
        if (val < l3) {
            return '#3490dc';
        }
        return '#1c4e80'; // Darkest shade of blue
    }


    // Shades of gray
    if (getGridTheme() === 'gray') {
        if (val < l1) {
            return '#e0e0e0'; // Lightest shade of gray
        }
        if (val < l2) {
            return '#b0b0b0';
        }
        if (val < l3) {
            return '#808080';
        }
        return '#404040'; // Darkest shade of gray
    }

    //shades of green
    if (val < l1)
        return '#9be9a8'
    if (val < l2)
        return '#40c463'
    if (val < l3)
        return '#30a14e'
    return '#216e39'
}

export const monthIndexMap = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}
export const getCurrentMonthAndYear = () => {
    const today = new Date()

    return { month: monthIndexMap[today.getMonth()], year: today.getFullYear() }
}

export function getDaysInMonth(month, year) {
    const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(month);

    if (monthIndex === -1) {
        // Invalid month name
        return 'Invalid month name';
    }

    const date = new Date(year, monthIndex + 1, 0);
    return date.getDate();
}

function sortMonths(monthsArray) {
    const monthOrder = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Custom sorting function based on the predefined order
    monthsArray.sort((a, b) => {
        return monthOrder.indexOf(a) - monthOrder.indexOf(b);
    });

    return monthsArray;
}

export const getAvailableMonthsAndYears = (habits) => {
    const calendars = []
    for (let i = 0; i < habits.length; ++i)
        calendars.push(habits[i].calendar)

    const months = [monthIndexMap[new Date().getMonth()]]
    const years = [new Date().getFullYear()]
    for (let i = 0; i < calendars.length; ++i) {
        for (let j = 0; j < calendars[i].length; ++j) {
            const d = new Date(calendars[i][j].epoch)
            const m = monthIndexMap[d.getMonth()]
            const y = d.getFullYear()
            if (!months.includes(m))
                months.push(m)
            if (!years.includes(y))
                years.push(y)
        }
    }
    return { months: sortMonths(months), years }
}

export const isRowModeEnabledInLocalStorage = () => {
    const check = localStorage.getItem('rowModeEnabled')
    if (!check)
        return false
    return JSON.parse(check)
}

export const enableRowModeInLocalStorage = (value) => {
    localStorage.setItem('rowModeEnabled', JSON.stringify(value))
}



export const getGridTheme = () => {
    const theme = localStorage.getItem('theme')
    if (!theme)
        return 'green'
    return theme
}

export const setGridTheme = (value) => {
    localStorage.setItem('theme', value)
}


function getCurrentWeekDates() {
    // Get today's date
    const today = new Date();

    // Calculate the start date of the current week (assuming Monday as the start of the week)
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - (today.getDay() + 6) % 7);

    // Calculate the end date of the current week
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    // Format the dates to 'date-month' format
    const options = { day: 'numeric', month: 'short' };
    const startDateMonth = startOfWeek.toLocaleDateString('en-US', options);
    const endDateMonth = endOfWeek.toLocaleDateString('en-US', options);

    return { startDateMonth, endDateMonth };
}



export function getCurrentWeekInfo() {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    // console.log(currentDayOfWeek);
    const daysToAdd = currentDayOfWeek === 1 ? 0 : 1 - currentDayOfWeek;
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + daysToAdd);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (7 - currentDayOfWeek)); // Move to the last day (Sunday) of the current week
    endOfWeek.setHours(23, 59, 59, 999); // Set hours, minutes, seconds, and milliseconds to the end of the day

    const currentWeekNumber = getWeekNumber()

    const dateOptions = { month: 'short', day: 'numeric' };
    const { startDateMonth, endDateMonth } = getCurrentWeekDates();

    return {
        weekNumber: currentWeekNumber,
        startOfWeek: startDateMonth,
        endOfWeek: endDateMonth
    }
    return {
        weekNumber: currentWeekNumber,
        startOfWeek: startOfWeek.toLocaleDateString(undefined, dateOptions), // Remove the year part
        endOfWeek: endOfWeek.toLocaleDateString(undefined, dateOptions), // Remove the year part
    };
}

function getWeekNumber(date) {
    const today = date ? new Date(date) : new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const daysSinceStart = Math.floor((today - startOfYear) / (24 * 60 * 60 * 1000));
    const currentWeekNumber = Math.ceil((daysSinceStart + 1) / 7);

    return currentWeekNumber;
}

export const getWeekValueAndColor = (calendar) => {
    const currentWeekNumber = getWeekNumber()
    const currentYear = new Date().getFullYear()
    const weekDays = calendar.filter((day) => {
        const d = new Date(day.epoch).getFullYear()
        return d === currentYear && currentWeekNumber === getWeekNumber(day.epoch)
    })

    return weekDays.sort((a, b) => a - b)
}

export function getMondayDate() {
    const now = new Date();
    const currentDay = now.getDay();
    const daysUntilMonday = currentDay === 0 ? 6 : currentDay - 1;
    const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysUntilMonday);
    return monday;
}


export const getTodaysEpoch = () => {
    const t = new Date()
    return new Date(`${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`).getTime()
}
export const getDateFromEpoch = (epoch) => {

    return new Date(epoch).toLocaleDateString('en-GB')
}

export const sortByIntensityOfExecution = (calendar) => {
    // console.log(habit);
    let count = 0 
    for(let i=0;i<calendar.length;++i){
        const d = new Date(calendar[i].epoch)
        const v = calendar[i].value
        const m = d.getMonth()
        const y = d.getFullYear()
        const currMonth = new Date().getMonth()
        const currYear = new Date().getFullYear()
        if(m===currMonth && y===currYear && v)
            ++count
    }
    // console.log(count);
    return count 
}

export const getValueFromEpoch = (calendar,epoch) => {
    for(let i=0;i<calendar.length;++i)
        if(calendar[i].epoch===epoch)
            return calendar[i].value 
    return 0
}