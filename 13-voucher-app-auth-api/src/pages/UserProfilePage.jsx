import React from 'react'
import useCookie from 'react-use-cookie'
import Container from '../components/Container';
import Breadcrumb from '../components/Breadcrumb';
import { HiUser } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

const UserProfilePage = () => {
    const [user] = useCookie('user');
    const { name, email, profile_img } = JSON.parse(user);
    return (
        <section>
            <Container>
                <Breadcrumb currentPageTitle={"User Profile"} />
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="relative">
                        <img className=' size-24 border-2 border-white rounded-full shadow-sm object-cover object-top'
                            src={profile_img ? profile_img : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
                        <button className='absolute right-0 bottom-0 text-xs  border  bg-blue-600 text-white rounded-md px-2'>Edit</button>
                    </div>

                    <div className="">
                        <h1 className='text-md font-bold text-center flex gap-3'><HiUser className='text-lg' /> {name}
                            <button className='text-xs  border  bg-blue-600 text-white rounded-md px-2'>Edit</button>
                        </h1>
                        <p className='text-md text-stone-500 flex gap-3 items-center'><HiEnvelope className='text-lg' /> {email}</p>
                    </div>
                    <button className='text-xs  border  bg-blue-600 text-white rounded-md px-2'>Change Password</button>
                </div>
            </Container>
        </section>
    )
}

export default UserProfilePage
