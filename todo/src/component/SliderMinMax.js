import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider(props) {
  const [value, setValue] = React.useState([30, 70]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.changeMin(newValue[0]);
    props.changeMax(newValue[1]);
  };


  return (
    <div className=' '>
            <Box sx={{ width: 177 }} className='ml-1'>
      <Slider
        getAriaLabel={() => 'Price range '}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0} 
        max={100} 
      />
    </Box>
    </div>

  );
}
