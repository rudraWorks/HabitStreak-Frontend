import React, { useState, useEffect,useRef } from 'react';

const monthIndicesToNames = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const containerStyle = {
  width: 'fit-content',
  maxWidth: '100%',
  border: '1px solid lightgray',
  borderRadius:'10px',
  backgroundColor:'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '7px',
  overflowX: 'auto',
};

const headerStyle = {
  height: '20px',
  paddingLeft: '10px',
  paddingBottom: '5px',
  display: 'flex',
  color: 'gray',
  marginBottom:'5px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateRows: 'repeat(7, 15px)',
  gridTemplateColumns: 'repeat(52, 15px)',
  gridGap: '3px',
  gridAutoFlow: 'column',
  padding: '10px',
  paddingTop: '0',
};

const itemStyle = {
  width: '17px',
  height: '17px',
  position: 'relative',
  listStyleType: 'none',
  border:'1px solid #CECECE',
  borderRadius:'0px' 
};

let data = [];

const daysInEachMonth = [
  31, 28, 31, 30, 31, 30,
  31, 31, 30, 31, 30, 31
];

// Generate random values for each date
let k = 1
for (let month = k; month <= 12; month++) {
  const daysInMonth = daysInEachMonth[month - 1];

  for (let day = 1; day <= daysInMonth; day++) {    
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const value = 1+Math.floor(Math.random() * 12); 
    data.push({ day:parseInt(formattedDay),month:parseInt(formattedMonth), value });
  }
} 

let p = []
for(let i=0;i<data.length;++i){
  if(Math.random()>.3731)
    p.push(data[i])
}
data = p

 
const CalendarComponent = () => {

  const [items, setItems] = useState([]);
  const [maxStreak,setMaxStreak] = useState(0)
  const hoverRef = useRef(null)

  useEffect(() => {
    const generateCalendarItems = () => {
      const items = [];
      const dateInit = new Date('2023-01-01');

      for (let i = 0; i < 365; ++i) {
        const itemDate = new Date(dateInit);
        const title = itemDate.toLocaleDateString('en-gb');
        let backgroundColor = 'white';
        let value = 0;
        const [day, month] = title.split('/');

        const flag = data.filter((item) => {
          return item.day === parseInt(day) && item.month === parseInt(month);
        });

        if (flag.length) {
          if (flag[0].value > 10) backgroundColor = '#216e39';
          else if (flag[0].value > 7) backgroundColor = '#30a14e';
          else if (flag[0].value > 4) backgroundColor = '#40c463';
          else backgroundColor = '#9be9a8';

          value = flag[0].value;
          backgroundColor='white'
        }

        items.push({
          title: title,
          value: value,
          backgroundColor: backgroundColor,
          day: day,
          month: month,
        });

        dateInit.setDate(dateInit.getDate() + 1);
      }

      setItems(items);
    };

    generateCalendarItems();
    
  }, [data]);

  useEffect(()=>{
    for(let i=0;i<items.length;++i){
      if(items[i].backgroundColor==='#f0f0f0')
        continue
      let cnt=1
      for(let j=i+1;j<items.length;++j){
        if(items[j].backgroundColor==='#f0f0f0')
          break
        ++cnt
      }
      setMaxStreak(p=>{
        if(cnt>p)
          return cnt 
        return p
      })
    } 
  },[items])

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ marginLeft: '30px' }}>Jan</div>
        <div style={{ marginLeft: '55px' }}>Feb</div>
        <div style={{ marginLeft: '55px' }}>Mar</div>
        <div style={{ marginLeft: '50px' }}>Apr</div>
        <div style={{ marginLeft: '50px' }}>May</div>
        <div style={{ marginLeft: '50px' }}>Jun</div>
        <div style={{ marginLeft: '55px' }}>Jul</div>
        <div style={{ marginLeft: '60px' }}>Aug</div>
        <div style={{ marginLeft: '45px' }}>Sep</div>
        <div style={{ marginLeft: '55px' }}>Oct</div>
        <div style={{ marginLeft: '55px' }}>Nov</div>
        <div style={{ marginLeft: '50px' }}>Dec</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={gridStyle}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{ ...itemStyle, backgroundColor: item.backgroundColor }}
              // onClick={() => {
              //   hoverRef.current.innerHTML = `<b>${item.value}</b> submission${
              //     item.value > 1 ? 's' : ''
              //   } on ${monthIndicesToNames[parseInt(item.month)]} ${parseInt(item.day)}`;
              // }}
              // onMouseEnter={() => {
              //   hoverRef.current.innerHTML = `<b>${item.value}</b> submission${
              //     item.value > 1 ? 's' : ''
              //   } on ${monthIndicesToNames[parseInt(item.month)]} ${parseInt(item.day)}`;
              // }}
              // onMouseLeave={() => {
              //   hoverRef.current.innerHTML = '';
              // }}
            />
          ))}
        </div>
        <div style={{display:'flex'}}>
           <div style={{ paddingLeft: '10px' }} ref={hoverRef}></div>
            {/* <div style={{marginLeft:'auto',marginRight:'10px',fontWeight:'bolder'}}> 🔥 Max Streak: {maxStreak}</div> */}
        </div>
        
      </div>
    </div>
  );
}; 

export default CalendarComponent;
