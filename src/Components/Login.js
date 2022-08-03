import React from 'react';
import { TextField } from '@mui/material';



const Login = () => {
    return (




        <div className='flex justify-center mt-[150px]'>

            <div class="w-3/4 p-4 max-w-sm bg-white mr-0 rounded-lg border border-gray-200 shadow-lg shadow-gray-700 sm:p-6 lg:p-8 font-Poppins">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900">Welcome To Admin Panel</h5>
                    <div>
                    <TextField  color='info' className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' id="outlined-basic" label="Email" variant="outlined" placeholder='Your Email' />
                    </div>
                    <div>
                        <TextField className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'  id="outlined-basic" label="Password" variant="outlined" placeholder='**********' />
                    </div>
                    <div class="flex items-start">
                        
                        <a href="/Forgetpassword" class=" text-md text-blue-700 hover:underline dark:text-blue-500">Forget Password</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                </form>
            </div>

      
        </div>


    );
}

export default Login;
