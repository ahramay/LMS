import { useState } from 'react'
import type {
    ColumnDef,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import type { CellContext } from '@/components/shared/DataTable'
import ViewUserTable from '@/components/shared/viewusertable/ViewUserTable'
import Button from '@/components/ui/Button'
import { HiOutlinePencil } from 'react-icons/hi'
import { MdDone, MdDelete } from 'react-icons/md'
import UserTableViewtypp from '@/@types/UserTableViewtype'
import InvoicStats from './components/InvoicStats'
import { useNavigate } from 'react-router-dom'
import Dialog from '@/components/ui/Dialog'

const InvoiceList = () => {

    const [dialogIsOpen, setIsOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    const openDialog = () => {
        setIsOpen(true)
        console.log("Dialogopen")
    }

    const onDialogClose = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }
    
   
    const handleAction = (cellProps: CellContext<UserTableViewtypp, unknown>) => {
        console.log('Action clicked', cellProps)

    }

    const handleViewAction =(cellProps: CellContext<UserTableViewtypp, unknown>)=>{
        const id =  cellProps?.row?.original?.id 
        if(id){
            navigate(`/invoice-list/invoice?id=${id}`);
        }
    }

    const columns = useMemo<ColumnDef<UserTableViewtypp>[]>(
        () => [
            {
                header: 'Invoice Id',
                accessorKey: 'id',
            },
            {
                header: 'User Name',
                accessorKey: 'userName',
            },
            {
                header: 'Email',
                accessorKey: 'mail',
            },
            {
                header: 'Status',
                accessorKey: 'userStatus',
            },
            
            {
                header: 'Actions',
                id: 'action',
                cell: (props) => { 
                    return (
                        <div className='flex gap-4 justify-center'>
                                    <Button
                                        size="xs"
                                        onClick={() => handleViewAction(props)}
                                        className="capitalize"
                                        variant="solid"
                                        color="blue-600"
                                        icon={<HiOutlinePencil size={15} />}
                                    >
                                        <span>View</span>
                                    </Button>
                                
                                    <Button
                                        size="xs"
                                        onClick={() => {
                                            handleAction(props)
                                            openDialog()
                                        }}
                                        className="capitalize"
                                        icon={<MdDelete size={15} />}
                                        variant="solid"
                                        color="red-600"
                                    >
                                        <span>Delete</span>
                                    </Button>
                        </div>
                    )
                },
            },
        ],
        []
    )

    const tableData=[
        {
            'id': '1',
            'userName':'userName 1',
            'mail': 'mail 1',          
            'userStatus':true ,
            'actions': '1',
        },
        {
            'id': '2',
            'userName':'userName 2',
            'mail': 'mail 2',          
            'userStatus':false ,
            'actions': '2',
        },
        {
            'id': '3',
            'userName':'userName 3',
            'mail': 'mail 3',          
            'userStatus':true ,
            'actions': '3',
        },
        {
            'id': '4',
            'userName':'userName 4',
            'mail': 'mail 4',          
            'userStatus': false ,
            'actions': '4',
        },
        
    ]
  return (
    <div className="px-4 md:px-8">
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
                    <p>Once deleted, this item will no longer be accessible.</p>
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
            </>
        <h2 className="">Invoice List</h2>
            <ul className="flex-col flex py-4 gap-4 lg:flex-row md:py-8">
                {Array(0, 1, 2).map((_, index) => (
                    <InvoicStats key={index} />
                ))}
            </ul>
        <ViewUserTable showHeader={true}  title='invoice' columns={columns}  tableData={tableData}  />
    </div>
  )
}

export default InvoiceList
