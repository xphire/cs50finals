import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import PreviewIcon from '@mui/icons-material/Preview';
import ShowModal from './ShowModal';
import generate from '../generateQR';

export default function DisplayHistory({rows }){

        const [open, setOpen] = React.useState(false);
        const [text, setText] = React.useState("");
        const [modalImage, setModalImage] = React.useState("");
       

        const setQR = async (url) => {

            const result = await generate(url);
            setModalImage(result);

        }


        const handleOpen = async (url) => {
            
            setText(url);
            setQR(url)
            setOpen(true);
        };

 

    return (
        <div>
            <ShowModal text={text} open = {open} setOpen={setOpen} modalImage={modalImage}  />
            <TableContainer component={Paper} className='w-100'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' className='fs-3 fw-bold'>
                                S/N
                            </TableCell>
                            <TableCell align='center' className='fs-3 fw-bold'>
                                URL
                            </TableCell>
                            <TableCell align='center' className='fs-3 fw-bold'>
                                VIEW QR
                            </TableCell>
                            <TableCell align='center' className='fs-3 fw-bold'>
                                DOWNLOAD QR
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { 
                            rows.map((item,index) => {

                                return (

                                    <TableRow key={item.id}>
                                        <TableCell align='center' className='fs-4'>{index + 1}</TableCell> 
                                        <TableCell align='center' className='fs-4'>{item.url}</TableCell>
                                        <TableCell align='center'>
                                        <Button className='py-3 text-nowrap' variant="contained"  size ="large" onClick={() => {handleOpen(item.url)}} endIcon={<PreviewIcon />} >VIEW QR </Button>
                                        </TableCell>
                                        <TableCell align='center'>
                                        <Button className='py-3 text-nowrap' href={item.qr} id={item.id} target='_blank' download='QRCODE' variant="contained"  size ="large"  endIcon={<DownloadIcon />} >DOWNLOAD QR </Button>
                                        </TableCell> 
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}