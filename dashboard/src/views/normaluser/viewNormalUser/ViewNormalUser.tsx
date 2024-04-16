import { useState } from 'react'
import type {
    ColumnDef,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import type { CellContext } from '@/components/shared/DataTable'
import ViewUserTable from '@/components/shared/viewusertable/ViewUserTable'
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from '@/components/ui/Dropdown'
import Button from '@/components/ui/Button'
import { HiOutlinePencil } from 'react-icons/hi'
import { MdDone, MdDelete } from 'react-icons/md'
import UserTableViewtypp from "@/@types/UserTableViewtype"
import Tag from '@/components/ui/Tag'


const ViewNormalUser = () => {

    const [dialogIsOpen, setIsOpen] = useState<boolean>(false)

    const openDialog = () => {
        setIsOpen(true)
        console.log("Dialogopen")
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }
    
   
    const handleAction = (cellProps: CellContext<UserTableViewtypp, unknown>) => {
        console.log('Action clicked', cellProps)

    }

    const columns = useMemo<ColumnDef<UserTableViewtypp>[]>(
        () => [
            {
                header: 'ID',
                accessorKey: 'editorId',
            },
            {
                header: 'User Name',
                accessorKey: 'userName',
            },
            {
                header: 'Email',
                accessorKey: 'editormail',
            },
            {
                header: 'First Name',
                accessorKey: 'firstName',
            },
            {
                header: 'Last Name',
                accessorKey: 'lastName',
            },
            {
                header: 'Sign-Up Date',
                accessorKey: 'signUpDate',
            },
            {
                header: 'Approval Status',
                accessorKey: 'userStatus',
            },
            {
                header: 'Actions',
                id: 'action',
                cell: (props) => {
                    const Toggle = (
                        <span className='cursor-pointer rotate-180'>
                            <BsThreeDotsVertical size={20}/>
                        </span>
                    )
                    return (
                        <>
                            <Dropdown placement="bottom-end" renderTitle={Toggle}>
                                <Dropdown.Item eventKey="a" >
                                    <Button
                                        size="xs"
                                        onClick={() => handleAction(props)}
                                        className="capitalize mr-2 mb-2 w-full p-0"
                                        variant="solid"
                                        color="blue-600"
                                        icon={<HiOutlinePencil size={15} />}

                                    >
                                        <span>Edit</span>
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="b">
                                    <Button
                                        size="xs"
                                        onClick={() => {
                                            handleAction(props)
                                            openDialog()
                                        }}
                                        className="mr-2 mb-2 capitalize w-full"
                                        icon={<MdDelete size={15} />}
                                        variant="solid"
                                        color="red-600"
                                    >
                                        <span>Delete</span>
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="c">
                                    <Button
                                        size="xs"
                                        onClick={() => handleAction(props)}
                                        className="capitalize mr-2 mb-2 w-full"
                                        variant="solid"
                                        color="green-600"
                                        icon={<MdDone />}
                                    >
                                        <span>approval</span>
                                    </Button>
                                </Dropdown.Item>
                            </Dropdown>
                        </>
                    )
                },
            },
        ],
        []
    )

    const tableData=[
        {
            'editorId': '1',
            'userName':'userName 1',
            'editormail': 'mail 1',
            'firstName': 'First Name 1',
            'lastName': 'Last Name 1',
            'signUpDate': 'Sign Up Date 1',
            'userStatus':
                true ? (
                    <Tag className=" capitalize text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                        Pending
                    </Tag>
                ) : (
                    <Tag className="bg-emerald-100 capitalize text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 ">
                        approved
                    </Tag>
                ),
            'actions': '1',
        },
        {
            'editorId': '2',
            'userName':'userName 2',
            'editormail': 'mail 2',
            'firstName': 'First Name 2',
            'lastName': 'Last Name 2 ',
            'signUpDate': 'Sign Up Date 2',
            'userStatus':
                false ? (
                    <Tag className=" capitalize text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                        Pending
                    </Tag>
                ) : (
                    <Tag className="bg-emerald-100 capitalize text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 ">
                        approved
                    </Tag>
                ),
            'actions': '1',
        },
        {
            'editorId': '3',
            'userName':'userName 3',
            'editormail': 'mail 3',
            'firstName': 'First Name 3',
            'lastName': 'Last Name 3',
            'signUpDate': 'Sign Up Date 3',
            'userStatus':
                false ? (
                    <Tag className=" capitalize text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                        Pending
                    </Tag>
                ) : (
                    <Tag className="bg-emerald-100 capitalize text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 ">
                        approved
                    </Tag>
                ),
            'actions': '1',
        },
        {
            'editorId': '4',
            'userName':'userName 4',
            'editormail': 'mail 4',
            'firstName': 'First Name 4',
            'lastName': 'Last Name 4',
            'signUpDate': 'Sign Up Date 4',
            'userStatus':
                true ? (
                    <Tag className=" capitalize text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                        Pending
                    </Tag>
                ) : (
                    <Tag className="bg-emerald-100 capitalize text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 ">
                        approved
                    </Tag>
                ),
            'actions': '1',
        },
    ]
  return (
    <div>
        <ViewUserTable dialogIsOpen={dialogIsOpen} onDialogOk={onDialogOk} onDialogClose={onDialogClose} title='Users' columns={columns}  tableData={tableData}  />
    </div>
  )
}

export default ViewNormalUser

