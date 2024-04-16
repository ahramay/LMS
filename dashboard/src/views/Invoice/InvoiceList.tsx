import { useState, useEffect } from 'react'
import InvoicStats from './components/InvoicStats'
import Input from '@/components/ui/Input'
import Tag from '@/components/ui/Tag'

interface Invoice {
    id: string
    name: string
    invoiceStatus: any
}
import { useMemo } from 'react'
import Table from '@/components/ui/Table'
import Pagination from '@/components/ui/Pagination'
import Select from '@/components/ui/Select'
import type { InputHTMLAttributes, ReactComponentElement } from 'react'
import type { ColumnDef, FilterFn, ColumnFiltersState } from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
} from '@tanstack/react-table'

type Person = {
    userName: string
    invoiceId:number
    invoiceStatus:any
    actions:any
    
}

type Option = {
    value: number
    label: string
}

const { Tr, Th, Td, THead, TBody, Sorter} = Table

interface DebouncedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'prefix'> {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}
function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: DebouncedInputProps) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="flex justify-end">
            <div className="flex items-center mb-4">
                <span className="mr-2">Search:</span>
                <Input
                    {...props}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
}
const tableData = (): Person[] => {
    const arr = []
    for (let i = 0; i < 100; i++) {
        arr.push({
            userName: `UserName ${i}`,
            invoiceId:i,
            invoiceStatus: i%2 !== 0 ? <Tag className="text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">Pending</Tag> :<Tag className="bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
            Paid
        </Tag>,
            actions:i
            
        })
    }
    return arr
}

const totalData = tableData().length

const pageSizeOption = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
    { value: 40, label: '40 / page' },
    { value: 50, label: '50 / page' },
]
const InvoiceList: React.FC = () => {
    const [status, setStatus] = useState<string>('all')
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')

    // useEffect(() => {
    //     const fetchInvoices = async () => {
    //         setLoading(true)
    //         try {
    //             const response = await axios.get<Invoice[]>(
    //                 `apiendPoint${status}`
    //             )
    //             setInvoices(response.data)
    //             setLoading(false)
    //         } catch (error) {
    //             console.error('Error fetching invoices:', error)
    //             setLoading(false)
    //         }
    //     }

    //     fetchInvoices()
    // }, [status])

    const handleStatusChange = (newStatus: string) => {
        setStatus(newStatus)
    }

    const columns = useMemo<ColumnDef<Person>[]>(
        () => [
            {
                header: 'user Name',
                accessorKey: 'userName',
            },
            {
                header: 'Invoice ID',
                accessorKey: 'invoiceId',
            },
            {
                header: 'Invoice Status',
                accessorKey: 'invoiceStatus',
            },
            {
                header:'Actions',
                accessorKey: 'actions',
            }
        
        ],
        []
    )

    const [data] = useState(() => tableData())
    console.log(data,"this is invoice taable data")
    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugHeaders: true,
        debugColumns: false,
    })

    const onPaginationChange = (page: number) => {
        table.setPageIndex(page - 1)
    }

    const onSelectChange = (value = 0) => {
        table.setPageSize(Number(value))
    }

    return (
        <div className="px-4 md:px-8">
            <h2 className="">Invoice List</h2>
            <ul className="flex-col flex py-4 gap-4 lg:flex-row md:py-8">
                {Array(0, 1, 2).map((_, index) => (
                    <InvoicStats key={index} />
                ))}
            </ul>

            <div className="flex mb-4 gap-6 overflow-x-scroll md:overflow-x-hidden border-b-2 bg-[#f8f9fa] rounded-md shadow-md px-4">
                <button
                    className={`p-4 text-lg  font-md hover:bg-[#F8F4EC] rounded-lg  ${
                        status === 'all'
                            ? ' text-blue-500 border-b-2 border-b-blue-700 rounded-none rounded-tl-lg rounded-tr-lg '
                            : 'text-black'
                    }`}
                    onClick={() => handleStatusChange('all')}
                >
                    All{' '}
                    <span className="text-xs ml-0 md:ml-2 text-white bg-blue-500 rounded-lg px-2 py-1">
                        15
                    </span>
                </button>
                <button
                    className={`p-4  text-lg font-md  hover:bg-[#F8F4EC] rounded-lg  ${
                        status === 'paid'
                            ? ' text-green-700 border-b-2 border-b-green-700  rounded-none rounded-tl-lg rounded-tr-lg'
                            : 'text-black'
                    }`}
                    onClick={() => handleStatusChange('paid')}
                >
                    Paid{' '}
                    <span className="text-xs ml-0 md:ml-2 text-white bg-green-500 rounded-lg px-2 py-1">
                        08
                    </span>
                </button>
                <button
                    className={`p-4 text-lg font-md hover:bg-[#F8F4EC] rounded-lg  ${
                        status === 'pending'
                            ? ' text-yellow-600 border-b-2 border-b-yellow-700 rounded-none rounded-tl-lg rounded-tr-lg'
                            : 'text-black'
                    }`}
                    onClick={() => handleStatusChange('pending')}
                >
                    Pending{' '}
                    <span className="text-xs ml-0 md:ml-2 text-white bg-yellow-500 rounded-lg px-2 py-1">
                        5
                    </span>
                </button>
                <button
                    className={`p-4  text-lg font-md hover:bg-[#F8F4EC] rounded-lg ${
                        status === 'canceled'
                            ? 'text-red-700 border-b-2 border-b-red-700 rounded-none rounded-tl-lg rounded-tr-lg'
                            : 'text-black'
                    }`}
                    onClick={() => handleStatusChange('canceled')}
                >
                    Canceled{' '}
                    <span className="text-xs ml-0 md:ml-2 text-white bg-red-500 rounded-lg px-2 py-1">
                        2
                    </span>
                </button>
            </div>
            <div>
            <DebouncedInput
                value={globalFilter ?? ''}
                className="p-2 font-lg shadow border border-block"
                placeholder="Search all columns..."
                onChange={(value) => setGlobalFilter(String(value))}
            />
            <Table>
            <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className:
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                    onClick:
                                                        header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {
                                                    <Sorter
                                                        sort={header.column.getIsSorted()}
                                                    />
                                                }
                                            </div>
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <Pagination
                    pageSize={table.getState().pagination.pageSize}
                    currentPage={table.getState().pagination.pageIndex + 1}
                    total={totalData}
                    onChange={onPaginationChange}
                />
                <div style={{ minWidth: 130 }}>
                    <Select<Option>
                        size="sm"
                        isSearchable={false}
                        value={pageSizeOption.filter(
                            (option) =>
                                option.value ===
                                table.getState().pagination.pageSize
                        )}
                        options={pageSizeOption}
                        onChange={(option) => onSelectChange(option?.value)}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}

export default InvoiceList
