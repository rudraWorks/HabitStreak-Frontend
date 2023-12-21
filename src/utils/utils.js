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

export const leapYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

export const getCurrentStreak = (calendar) => {
    calendar = calendar.sort(function(a, b){return a.epoch-b.epoch})
    let tEpoch = todaysEpoch()
    let flag = 0 
    let value = 0 

    for(let i=0;i<calendar.length;++i){
        if(calendar[i].epoch===tEpoch){
            flag=1
            value=calendar[i].value
            break
        }
    }

    let yEpoch = tEpoch - 1000*60*60*24 

    let index = -1  
    for(let i=0;i<calendar.length;++i){
        if(calendar[i].epoch === yEpoch){
            index=i
            break
        }
    }
    let str = 0 
    if(index!==-1 && calendar[index].value){
        let cnt=1
        for(let i=index;i>=1;--i){
            if(calendar[i].epoch-calendar[i-1].epoch===1000*60*60*24 && calendar[i].value)
                ++cnt 
            else 
                break
        }
        str+=cnt
    }
    if(flag && value)
        str+=1 
    // console.log(calendar,flag)
    return str
}

export const getMaxStreak = (calendar) => {
    calendar = calendar.sort(function(a, b){return a.epoch-b.epoch})
    let mx = 0 
    for(let i=0;i<calendar.length;++i){
        if(!calendar[i].value)
            continue 
        let cnt=1
        for(let j=i+1;j<calendar.length;++j){
            if(calendar[j].epoch-calendar[j-1].epoch === 1000*60*60*24 && calendar[j].value)
                ++cnt 
            else 
                break
        } 
        if(cnt>mx)
            mx=cnt
    }
    return mx
}


export const denomiator = (streak) => {
    if(streak<10)
        return 10 
    if(streak<30)
        return 30 
    if(streak<50)
        return 50 
    if(streak<100)
        return 100
    return 180
}

export const isDoneToday = (calendar) => {
    for(let i=0;i<calendar.length;++i)
        if(calendar[i].epoch === todaysEpoch() && calendar[i].value)
            return true 
    return false
}

export const getBackgroundColor = (val,calendar) => {
    let mx = 0 
    for(let i=0;i<calendar.length;++i){
        if(calendar[i].value>mx){
            mx=calendar[i].value 
        }
    }
    let l1 = mx*.25
    let l2 = mx*.5
    let l3 = mx*.75
    if(val<l1)
        return '#9be9a8'
    if(val<l2)
        return '#40c463'
    if(val<l3)
        return '#30a14e'
    return '#216e39' 
}