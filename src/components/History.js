import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import PreviewIcon from '@mui/icons-material/Preview';
import Typography from '@mui/material/Typography';


export default function History({url , index }){

    return(

          <Stack direction="row" spacing={10} className='d-flex justify-content-center mb-3'>
            <Typography className="text-dark fs-1">{index}</Typography>
            <Typography className="text-dark fs-1">{url}</Typography>
            <Button className='py-3' variant="contained"  size ="large" endIcon={<DownloadIcon />} >VIEW QR </Button>
            <Button className='py-3' variant="contained"  size ="large" endIcon={<PreviewIcon />} >DOWNLOAD QR </Button>
          </Stack>
          
    )

}