import React, { useRef } from 'react'
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
import { MdDone, MdDelete } from 'react-icons/md'
import UserTableViewtypp from "@/@types/UserTableViewtype"
import { HiOutlineXMark } from "react-icons/hi2";
import Dialog from '@/components/ui/Dialog'
import Input from '@/components/ui/Input'
import { Tooltip} from "@/components/ui"
import { HiOutlinePencil } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
interface ProfilePictureApprovalProps{

}

const ProfilePictureApproval:React.FC<ProfilePictureApprovalProps> = () => {

    const [dialogIsOpen, setIsOpen] = useState<boolean>(false)
    const [dialogIsOpenReject, setIsOpenReject] = useState<boolean>(false)

    const rejectFeebackAddInputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();

    const openDialog = () => {
        setIsOpen(true)
        console.log("Dialogopen")
    }

    const openRejectDialog = () =>{
        setIsOpenReject(true)
    }

    const onDialogClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
        setIsOpenReject(false)
        
    }

    const onDialogOk = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
        setIsOpenReject(false)
    }
    
   
    const handleAction = (cellProps: CellContext<UserTableViewtypp, unknown>) => {
        const userData = cellProps?.row?.original || null
        const userId = cellProps?.row?.original?._id || null
        if(userData && userId){
            navigate(`/user/updateStatus/?userId=${userId}`, {state: userData})
        }
    }

    const onRejectApprovalDialogClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        if(rejectFeebackAddInputRef?.current){
            const inputFeebackValue = rejectFeebackAddInputRef?.current?.value
            console.log(inputFeebackValue)
        }
        setIsOpenReject(false)
    }
    
    const columns = useMemo<ColumnDef<UserTableViewtypp>[]>(
        () => [
            // {
            //     header: 'ID',
            //     // accessorKey: (row: UserTableViewtypp, rowIndex: number) => `${rowIndex + 1}`,
            // },
            {
                header: 'First Name',
                accessorKey: 'firstName',
            },
            {
                header: 'Last Name',
                accessorKey: 'lastName',
            },
            {
                header: 'User Name',
                accessorKey: 'userName',
            },
            {
                header: 'Email',
                accessorKey: 'email',
            },
            
            {
                header: 'Profile Pic Status',
                accessorKey: 'profilePicStatus',
            },
            {
                header: 'Actions',
                id: 'action',
                cell: (props) => (
                    // const Toggle = (
                        <span className='cursor-pointer rotate-180'>
                            {/* <BsThreeDotsVertical size={20}/> */}
                            <Tooltip title="Edit">
                            <span
                                className={`cursor-pointer p-2 hover:text-blue-400`}
                            >
                                <HiOutlinePencil onClick={() => {
                                    handleAction(props)
                                    // openDialog()
                                }} />
                            </span>
                        </Tooltip>
                        </span>
                    )
                                  
            },
        ],
        []
    )

    let avatarSrc= 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

    const tableData=[
        {
            'id': '1',
            'profilePicture':avatarSrc,
            'userName':'userName 1',
            'userStatus': true ,
            'actions': '1',
        },
        {
            'id': '2',
            'profilePicture':avatarSrc,
            'userName':'userName 1',
            'userStatus': true ,
            'actions': '1',
        },
        {
            'id': '3',
            'profilePicture':avatarSrc,
            'userName':'userName 1',
            'userStatus': false ,
            'actions': '1',
        },
        {
            'id': '4',
            'profilePicture':avatarSrc,
            'userName':'userName 1',
            'userStatus': true ,
            'actions': '1',
        },
        
    ]
  return (
    <div>
                   <>
                   <Dialog
                        isOpen={dialogIsOpen}
                        bodyOpenClassName="overflow-hidden"
                        onClose={onDialogClose}
                        onRequestClose={onDialogClose}
                    >
                        <h5 className="mb-4">
                            Would you like to permanently delete this item ?
                        </h5>
                        <p>
                            Once deleted, this item will no longer be
                            accessible.
                        </p>
                        <div className="text-right mt-6">
                            <Button
                                className="capitalize me-2"
                                variant="solid"
                                onClick={onDialogOk}
                                color="red-600"
                            >
                                Permanently delete
                            </Button>
                            <Button
                                className="ltr:mr-2 rtl:ml-2 capitalize"
                                variant="twoTone"
                                onClick={onDialogClose}
                            >
                                Cancel
                            </Button>
                            
                        </div>
                    </Dialog>
                    <Dialog
                        isOpen={dialogIsOpenReject}
                        bodyOpenClassName="overflow-hidden"
                        onClose={onDialogClose}
                        onRequestClose={onDialogClose}
                    >
                        <div>
                            <p className='pb-4'>
                                Reject this profile 
                            </p>
                            <Input ref={rejectFeebackAddInputRef} placeholder='Please your add Comment / Feedback'/>
                           
                        </div>
                        <div className="text-right mt-6">
                            <Button
                                className="capitalize me-2"
                                variant="solid"
                                onClick={onRejectApprovalDialogClose}
                                color="red-600"
                            >
                                Reject
                            </Button>
                            <Button
                                className="ltr:mr-2 rtl:ml-2 capitalize"
                                variant="twoTone"
                                onClick={onDialogClose}
                            >
                                Cancel
                            </Button>
                            
                        </div>
                    </Dialog>
                   </>
                    <ViewUserTable showHeader={false}  title='Admins' columns={columns}  tableData={tableData}  />
    </div>
  )
}


export default ProfilePictureApproval