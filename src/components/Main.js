import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Divider from '@mui/material/Divider';
import DisplayHistory from './DisplayHistory';
import Typography from '@mui/material/Typography';
import isURL from 'validator/lib/isURL';



export default  function Main({image, makeQR , getUrl , url , history}) {


    const [disable, setDisable] = React.useState(true);
    const [error, setError] = React.useState('');


    const validateUrl = (str) => {

        const validatorOptions = {

            "protocols" : ['https'],
            "require_tld" : true,
            "allow_underscores" : true,
    
        };

      return isURL(str, validatorOptions);
    }


    const disableMUI = async () => {


        
        if (validateUrl(url) === false)
        {
            setError('Kindly input a valid URL');
            return
        }


        setError('');


        await makeQR(url);

        setDisable(true);

        return;
    }


    const inputDisable = (e) => {

        getUrl(e);

        setDisable(false);

        return

    }


    React.useEffect( () => {
        
        return url === "" ? setDisable(true) : setDisable(false)

    },[url])


  
    return (
        <main className="main text-center py-3 display-3 text-white d-flex flex-column align-items-center overflow-y-scroll">
            <div className='d-flex flex-column justify-content-around mb-3 imagify'>
                <img className='mb-5' src={image} alt="qr code" />
                <Stack spacing={2} >
                    <TextField id="outlined-basic" label="Enter URL Here" variant="outlined" size='large' type='url' name='url' onChange={(e) => {inputDisable(e)}} />
                    <Button className='py-3' variant="contained" disabled={disable} size ="large" endIcon={<QrCodeIcon />} onClick={() => disableMUI()}>GENERATE QR </Button>
                    {error && <Typography className='text-danger font-weight-bold fs-3'>{error}</Typography>} 
                </Stack>
            </div>
            <Divider style={{"border" : "5px solid black"}} className='w-100 mb-3' />
            {history.length  >= 1 &&  <div className='w-100'>
                <p className='my-3 text-bold display-5 text-dark bg-secondary w-100 text-white fw-bold text-uppercase' >History</p>

                <DisplayHistory rows={history}/>

            
            </div>  }
           
          
        </main>
    )
}