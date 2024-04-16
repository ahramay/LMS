
import { useState, useEffect, useRef, ChangeEvent } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import DataTable from '@/components/shared/DataTable'
import debounce from 'lodash/debounce'
import axios from 'axios'
import type { ColumnDef, OnSortParam, CellContext } from '@/components/shared/DataTable'

type Customer = {
    id: string;
    name: string;
    email: string;
    status:string;
    lastonline:string;
}

const TableDataUsers = () => {
    // const [data, setData] = useState([])
    const [data, setData] = useState<Customer[]>([]); 
    const [loading, setLoading] = useState(false)
    const [tableData, setTableData] = useState<{
        pageIndex: number
        pageSize: number
        sort: {
            order: '' | 'asc' | 'desc'
            key: string | number;
        };
        query: string
        total: number
    }>({
        total: 50,
        pageIndex: 1,
        pageSize: 10,
        query: '',
        sort: {
            order: '',
            key: '',
        },
    })

    const inputRef = useRef(null)

    const debounceFn = debounce(handleDebounceFn, 500)

    function handleDebounceFn(val: string) {
        if (typeof val === 'string' && (val.length > 1 || val.length === 0)) {
            setTableData((prevData) => ({
                ...prevData,
                ...{ query: val, pageIndex: 1 },
            }))
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        debounceFn(e.target.value)
    }

    const handleAction = (cellProps: CellContext<Customer, unknown>) => {
        console.log('Action clicked', cellProps)
    }
    const sampleData: Customer[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john.doe@example.com',
            status: 'Active',
            lastonline:'24-01-2024'
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            status: 'Active',
            lastonline:'24-01-2024'
        },
        {
            id: '3',
            name: 'Michael Johnson',
            email: 'michael.johnson@example.com',
            status: 'Active',
            lastonline:'24-01-2024'
        },
        
    
    ];
    

    const columns: ColumnDef<Customer>[] = [
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'status',
            accessorKey: 'status',
        },
        {
            header: 'lastonline',
            accessorKey: 'lastonline',
        },
        {
            header: 'Action',
            id: 'action',
            cell: (props) => (
                <Button size="xs" onClick={() => handleAction(props)}>
                    Action
                </Button>
            ),
        },
    ]

    const handlePaginationChange = (pageIndex: number) => {
        setTableData((prevData) => ({ ...prevData, ...{ pageIndex } }))
    }

    const handleSelectChange = (pageSize: number) => {
        setTableData((prevData) => ({ ...prevData, ...{ pageSize } }))
    }

    const handleSort = ({ order, key }: OnSortParam) => {
        console.log({ order, key })
        setTableData((prevData) => ({
            ...prevData,
            ...{ sort: { order, key } },
        }))
    }

   

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            setData(sampleData)
            setLoading(false)
            // const response = await axios.post('/api/crm/customers', tableData)
            // if (response.data) {
            //     setData(response.data.data)
            //     setLoading(false)
            //     setTableData((prevData) => ({
            //         ...prevData,
            //         ...{ total: response.data.total },
            //     }))
            // }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tableData.pageIndex,
        tableData.sort,
        tableData.pageSize,
        tableData.query,
    ])

    return (
        <>
            <div className="flex justify-end mb-4">
                <Input
                    ref={inputRef}
                    placeholder="Search..."
                    size="sm"
                    className="lg:w-52"
                    onChange={handleChange}
                />
            </div>
            <DataTable
                columns={columns}
                data={data}
                loading={loading}
                pagingData={tableData}
                onPaginationChange={handlePaginationChange}
                onSelectChange={handleSelectChange}
                onSort={handleSort}
            />
        </>
    )
}

export default TableDataUsers