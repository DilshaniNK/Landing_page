import React,{useContext} from 'react';
import { UseContext } from './Provider';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';


const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff', // Default background color
    color: '#000', // Default text color
    borderRadius: '10px', // Rounded corners for the container
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: Box shadow for a lifted effect
    marginBottom: '20px', // Optional: Space below the container
  });

const ThemedSwitch=styled(Switch)(({theme})=>({
    '&.MuiSwitch-switchBase.Mui-checked':{
        color : theme==='light' ? '#000' :'#fff',

    },
    '&.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track':{
        backgroundColor:theme==='light' ? '#000':'#fff',
    },
}))


export default function ChildComponent(){
    const {theme,toggleTheme} =useContext(UseContext);
    return (
        
            <Container>
            <div style={{ display: 'flex', alignItems: 'center'}}/>
            <span style={{  fontWeight:'bold', fontSize: '18px' }}>{theme} Mode</span>
            <ThemedSwitch
                checked={theme==='dark'}
                onChange={toggleTheme}
                inputProps={{'aria-label':'theme toggle'}}/>
                </Container>
        
    
    );
}