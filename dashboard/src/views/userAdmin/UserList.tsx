import React from 'react'
import { CgUserList } from 'react-icons/cg'
import UserRow from './components/UserRow'

import UsersStatCard from './components/usersStatCard'
import { array } from 'yup'
import TableDataUsers from './components/TableDataUsers'

type Props = {}

const UserList = (props: Props) => {
    return (
        <div className="">
            <ul className=" text-sm pb-8 flex gap-10 font-medium text-center text-gray-500 rounded-lg flex-col lg:flex-row ">
                <UsersStatCard />
                <UsersStatCard />
                <UsersStatCard />
            </ul>
            <TableDataUsers/>
        </div>
    )
}

export default UserList
