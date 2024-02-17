import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getBackgroundColor, leapYear, todaysEpoch } from '../utils/utils';

const containerStyle = {
  width: 'fit-content',
  maxWidth: '100%',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '7px',
  overflowX: 'auto',
  background: '#E1F2F6',
  alignSelf:'center'
};

const headerStyle = {
  height: '20px',
  paddingLeft: '10px',
  paddingBottom: '5px',
  display: 'flex',
  color: 'gray',
  marginBottom: '5px',
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
  border: '1px solid #CECECE',
  borderRadius: '0px',
};

const CalendarComponent = ({ gridThemeFlag,calendar, hoverRef, year }) => {
  const [items, setItems] = useState([]);
  // console.log(isLeapYear)
  const totalDays = leapYear(year)?366:365
  // console.log(totalDays)
  useEffect(() => {
    const generateCalendarItems = () => { 
      const items = [];
      let epoch = new Date(`01/01/${year}`).getTime();

      for (let i = 0; i < totalDays; ++i) {
        let title = epoch//.toLocaleDateString('en-gb');
        let backgroundColor = 'white';
        let value = 0;

        const flag = calendar.filter((item) => {
          return item.epoch === epoch;
        });

        if (flag.length) {
          const x = flag[0].value 
          backgroundColor = getBackgroundColor(x,calendar)
          // console.log(backgroundColor); 
          // if (flag[0].value > 10) backgroundColor = '#216e39';
          // else if (flag[0].value > 7) backgroundColor = '#30a14e';
          // else if (flag[0].value > 4) backgroundColor = '#40c463';
          // else backgroundColor = '#9be9a8';

          // value = flag[0].value; 
          value = x 
        }
        let colorarr = ['#30a14e','#40c463','#216e39','#216e39','#fff']
        items.push({
          title: title,
          value: value,
          backgroundColor//:colorarr[Math.floor(Math.random()*5)]
        });
  
        epoch += 1000 * 60 * 60 * 24;
      }

      setItems(items);
    };

    generateCalendarItems();
  }, [calendar,year,gridThemeFlag]);

 
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
              style={{ ...itemStyle, backgroundColor: item.backgroundColor,border:item.title===todaysEpoch()?'2px solid red':'1px solid #CECECE' }}
              onMouseEnter={() => {
                if(!hoverRef)
                  return
                hoverRef.current.innerHTML = `<span style="font-size:14px;color:navy;display:flex;align-items:center;"> ${new Date(item.title).toLocaleDateString('en-US',{ day: 'numeric', month: 'short' })},<b>&nbsp;&nbsp;${item.value}</b> </span>`;
              }}
              onMouseLeave={() => { 
                if(!hoverRef) 
                  return
                hoverRef.current.innerHTML = '';
              }}  
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
