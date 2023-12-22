import React, { useEffect, useRef } from 'react'
import { Container, Progress } from './Styles'



const handleYear = () => {
    const now = Date.now()
    const firstJan = new Date(`01/01/${new Date().getFullYear()}`)
    const diff = now - firstJan
    const daysElapsed = diff / (1000 * 60 * 60 * 24)
    const percentageElapsed = (daysElapsed / 365) * 100
    return percentageElapsed.toFixed(6)
}

const handleDay = () => {
    const now = Date.now()
    const midNight = new Date(`${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`)
    const diff = now - midNight
    const hoursElapsed = diff / (1000 * 60 * 60)
    const percentageElapsed = (hoursElapsed / 24) * 100
    return percentageElapsed.toFixed(6)
}

const handleMonth = () => {
    const now = Date.now()
    const firstDayOfMonth = new Date(`${new Date().getMonth() + 1}/01/${new Date().getFullYear()}`)
    const diff = now - firstDayOfMonth
    const daysElapsed = diff / (1000 * 60 * 60 * 24)
    const percentageElapsed = (daysElapsed / 31) * 100
    return percentageElapsed.toFixed(6)
}

const handleHour = () => {
    const now = new Date()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const totalMintues = minutes + (seconds/60)
    const hoursElapsed = (totalMintues/60)*100
    return hoursElapsed.toFixed(6)
}

const handleQuarter = () => {
    const now = new Date()
    const minutes = now.getMinutes() + now.getSeconds()/60
    const quarterIndex = Math.floor(minutes/15)
    const lower = quarterIndex*15
    const upper = quarterIndex*15+15
    const quarterElapsed = ((minutes-lower)/15)*100
    // console.log(minutes,quarterIndex,lower,upper,quarterElapsed)
    return quarterElapsed.toFixed(6)   
}

const currentMonthIndex = new Date().getMonth();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const currentMonthName = monthNames[currentMonthIndex];


function TimeLeft() {

    const year = useRef(null)
    const yearProgressBar = useRef(null)

    const month = useRef(null)
    const monthProgressBar = useRef(null)

    const day = useRef(null)
    const dayProgressBar = useRef(null)

    const hour = useRef(null)
    const hourProgressBar = useRef(null)

    const quarter = useRef(null)
    const quarterProgressBar = useRef(null)


    const dateAndTime = useRef(null)
    
    const update = () => {
        year.current.textContent = handleYear() + ' %';
        yearProgressBar.current.value = handleYear()

        month.current.textContent = handleMonth() + ' %'
        monthProgressBar.current.value = handleMonth()

        day.current.textContent = handleDay() + ' %'
        dayProgressBar.current.value = handleDay() 

        hour.current.textContent = handleHour() + ' %'
        hourProgressBar.current.value = handleHour()

        quarter.current.textContent = handleQuarter() + ' %'
        quarterProgressBar.current.value = handleQuarter()

        dateAndTime.current.textContent = new Date().toLocaleString('hi-IN')
    }
    
    useEffect(() => {
        
        const intervalId = setInterval(() => {
            update()
        }, 1000);
        update()
        // Cleanup function to clear the interval when the component unmounts or when it rerenders
        return () => clearInterval(intervalId);
    }, [])


    return (
        <Container>
            <div>
                <img src='/icons/countdown.png'/>
                <h2 ref={dateAndTime}></h2>
            </div>
            <br />

            <h3>This Quarter (15 min) <span ref={quarter}></span></h3>
            <Progress   ref={quarterProgressBar} max="100"> </Progress>

            <h3>This Hour <span ref={hour}></span></h3>
            <Progress   ref={hourProgressBar} max="100"> </Progress>

            <h3>Today <span ref={day}></span></h3>
            <Progress   ref={dayProgressBar} max="100"> </Progress>

            <h3>{currentMonthName} <span ref={month}></span></h3>
            <Progress  ref={monthProgressBar} max="100"> </Progress>

            <h3>{new Date().getFullYear()} <span ref={year}></span></h3>
            <Progress  ref={yearProgressBar} max="100"> </Progress>
        </Container>
    )
}

export default TimeLeft