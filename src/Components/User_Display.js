import { Fragment } from 'react';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function UserDisplay(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { name, email, last, img, username } = props;

    return (
        <Fragment>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={img} alt='' className=' w-[44px] h-[44px]  rounded-full ' />
                    </th>
                    <td class="py-4 px-6">
                        {name}
                    </td>
                    <td class="py-4 px-6">
                        {email}
                    </td>
                    <td class="py-4 px-6">
                        {last}
                    </td>
                    <td class="py-4 px-6">
                        {username}
                    </td>
                    <td class="py-4 px-6">
                        <button onClick={handleOpen} type="button" class="text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">View</button>

                        <button type="button" class="ml-[20px] text-red-700 bg-white  border border-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Delete</button>

                    </td>
                </tr>
            </tbody>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>

                        <div className='py-3 flex justify-center'>
                            <img src={img} alt='' className=' w-[55px] h-[55px]  rounded-full ' />

                        </div>

                        <div className='flex'>
                            <b>Name : </b> <p className="px-3">{name}</p>
                        </div>
                        <div className='flex'>
                            <b>Email : </b> <p className="px-3">{email}</p>
                        </div>
                        <div className='flex'>
                            <b>Last : </b> <p className="px-3">{last}</p>
                        </div>
                        <div className='flex'>
                            <b>Username : </b> <p className="px-3">{username}</p>
                        </div>




                    </Box>
                </Fade>
            </Modal>

        </Fragment>
    )
}

export default UserDisplay

