import { useState } from 'react'
import './App.css'
import Slider from '@mui/material/Slider';
import CustomSliderThumb from './assets/icon-slider.svg';
import Switch from '@mui/material/Switch';
import * as React from 'react';

function App() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div id='main_container'>
        <div id='top_text'>
          <p style={{
            color: 'hsl(227, 35%, 25%)',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>Simple, traffic-based pricing</p>
          <p style={{
            color: 'hsl(225, 20%, 60%)',
            fontSize: '15px',
            paddingTop: '10px'
          }}>Sign-up for our 30 day trial.</p>
          <p style={{
            color: 'hsl(225, 20%, 60%)',

            paddingTop: '5px'
          }}>No credit card required.</p>
        </div>

        <div id='card'>
          <p style={{
            letterSpacing: ".1rem",
            color: 'hsl(225, 20%, 60%)',
            fontSize: '15px',
            textTransform: 'uppercase'
          }}>100k pageviews</p>
          <Slider
            defaultValue={50}
            sx={{
              width: 300,
              height: 7,
              color: '#a3f2e8',
              '& .MuiSlider-thumb': {
                width: '45px',
                height: '45px',
                color: '#11d8c5',
                backgroundImage: `url(${CustomSliderThumb})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                boxShadow: '0 20px 21.5px 10px #adfff8',
              },
              '& .Mui-focusVisible': {
                boxShadow: 'none',
              },
            }}
          />

          <div id='pricing'>
            <p style={{
              color: '#293455',
              fontWeight: 'bold',
              fontSize: '2.2rem',
            }}>$16.00</p>
            <p style={{
              color: '#878c9e',
            }}>&nbsp;&nbsp;&nbsp;/&nbsp;month</p>
          </div>

          <div id='pricing_plan'>
            <p style={{
              color: '#848c9d',
              fontSize: '15px',
            }}>Monthly Billing</p>
            <Switch
              sx={{
                height: '45px',
                width: '70px',
                color: 'success.main',
                '& .MuiSwitch-track': {
                  borderRadius: '10px',
                  backgroundColor: '#d0d8ef',
                },
                '& .MuiSwitch-thumb': {
                  width: '17px',
                  height: '17px',
                },
                '& .MuiSwitch-switchBase': {
                  padding: '1px 4px 0 4px',
                  top: 'initial',
                  left: 'initial',

                }
              }}
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <p style={{
              color: '#848c9d',
              fontSize: '15px',
            }}>Yearly Billing</p>
            <div id='discount'>
              <p>-25%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
