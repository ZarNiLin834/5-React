// import React from 'react'
import Container from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import { HiCircleStack, HiUserCircle } from "react-icons/hi2";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { HiMiniTv } from "react-icons/hi2";
import LogOut from '../components/LogOut';

const DashboardPage = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Product Module"}
                icon={<HiCircleStack className='size-8'/> }
                url={'/dashboard/product'} />
            </div>

            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Sale Module"}
                icon={<HiMiniTv className='size-8'/>}
                url={'/dashboard/sale'} />
            </div>

            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Voucher Module"}
                icon={<HiDocumentDuplicate className='size-8'/>}
                url={'/dashboard/voucher'} />
            </div>

            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"User Profile"}
                icon={<HiUserCircle className='size-8'/>}
                url={'/dashboard/user-profile'} />
            </div>
          </div>

          <div className="flex justify-between mt-2">
           <p>If you done your work please logout</p>
           <LogOut />
          </div>
        </Container>
      </section>
    </div>
  )
}

export default DashboardPage
