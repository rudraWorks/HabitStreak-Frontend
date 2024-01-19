import { getBackgroundColor, getDaysInMonth, monthIndexMap } from "../../utils/utils"
import { DayBox, DayBoxContainer } from "./Styles"

export const MonthDatesRow = ({month,year}) => {
    const temp = [] 
    for(let i=1;i<=getDaysInMonth(month,year);++i)
        temp.push(i)
    return (
        <DayBoxContainer>  
            { 
                temp.map((i,index) => {
                    return <DayBox key={index} style={{border:'0px solid #79c0ff',display:'flex',justifyContent:'center',alignItems:'center',background:'transparent',borderRadius:'50%',fontSize:'.95rem',color:'black',':hover':{fontWeight:'100'}}}>{i}</DayBox>
                })
            }
        </DayBoxContainer>
    )
} 
export const DayBoxesContainer = ({name,habits,month,year}) => {
    const calendar = (habits.filter((habit)=>habit.name===name)[0]).calendar.filter((date)=>monthIndexMap[new Date(date.epoch).getMonth()]===month && new Date(date.epoch).getFullYear()===year)
    // console.log(calendar);
    const dateColor = {} 
    for(let i=0;i<calendar.length;++i){
        const date = new Date(calendar[i].epoch).getDate()
        dateColor[date] = getBackgroundColor(calendar[i].value,calendar)
    }

    const temp = []  
    for(let i=1;i<=getDaysInMonth(month,year);++i)
        temp.push(i)
    return (
        <DayBoxContainer> 
            {
                temp.map((i,index) => {
                    return <DayBox key={index} style={{background:dateColor[i]?dateColor[i]:'white'}}></DayBox>
                })
            }
        </DayBoxContainer>
    )
}