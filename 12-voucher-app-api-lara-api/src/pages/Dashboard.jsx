// import React from 'react'
import Container from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import { HiCircleStack } from "react-icons/hi2";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { HiMiniTv } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 items-center">
            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Product Module"}
                icon={<HiCircleStack className='size-8'/> }
                url={'/product'} />
            </div>

            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Sale Module"}
                icon={<HiMiniTv className='size-8'/>}
                url={'/sale'} />
            </div>

            <div className="col-span-1 row-span-1">
              <ModuleBtn name={"Voucher Module"}
                icon={<HiDocumentDuplicate className='size-8'/>}
                url={'/voucher'} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Dashboard
