 import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
 
 function Appbar(){
    const theme=useTheme() 
    const matches=useMediaQuery(theme.breakpoints.down(matchMedia));
   return (
     <>
       {matches? <h1>Mobile</h1>:<h1>Desktop</h1>}
     </>
   )
 }
 
 export default Appbar;
 