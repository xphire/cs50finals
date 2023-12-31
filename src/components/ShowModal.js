import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '250px',
    height: '250px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '20px',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center'
};




export default function ShowModal({text,open, setOpen, modalImage}){

    return (
         
        <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img className='mb-5 imagify img-fluid' src={modalImage} alt="qr code" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {text}
            </Typography>
          </Box>
        </Modal>
      </div>
    )


}