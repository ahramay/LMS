import React, { useState, useEffect, useRef } from 'react'
import { InputHTMLAttributes } from 'react'
import { ColumnDef, FilterFn, ColumnFiltersState } from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
} from '@tanstack/react-table'
import {
    CourseState,
    getAllCourses,
    useAppDispatch,
    useAppSelector,
} from '@/store'
import { Course as ICourse } from '@/@types'
import Container from '@/components/shared/Container'
import Table from '@/components/ui/Table'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { useParams } from 'react-router-dom'

type Person = {
    topic: string
    postTitle: string
    objectivesTitle: string
    price: number
    status: string
}

type Option = {
    value: string
    label: string
}

interface DebouncedInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'onChange' | 'size' | 'prefix'
    > {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}

const CourseFilter: React.FC = () => {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined)
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined)
    const [status, setStatus] = useState<string | undefined>(undefined)
    const isRendering = useRef(false)
    const { courseId } = useParams<{ courseId: string }>()

    const { allCourseList }: CourseState = useAppSelector(
        (state) => state.courseSlice
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (allCourseList.length === 0 && !isRendering.current) {
            dispatch(getAllCourses())
            isRendering.current = true
        }
    }, [allCourseList])

    const openDialog = () => {
        setIsOpen(true)
    }

    const onDialogClose = () => {
        setIsOpen(false)
    }

    const onDialogOk = () => {
        setIsOpen(false)
    }

    const { Tr, Th, Td, THead, TBody, Sorter } = Table

    const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
        const itemRank = rankItem(row.getValue(columnId), value)
        addMeta({
            itemRank,
        })
        return itemRank.passed
    }

    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            { header: 'Topic', accessorKey: 'topic' },
            { header: 'Post Title', accessorKey: 'postTitle' },
            { header: 'Objectives Title', accessorKey: 'objectivesTitle' },
            { header: 'Price', accessorKey: 'price' },
            { header: 'Status', accessorKey: 'status' },
        ],
        []
    )

    const tableData = (): Person[] => {
        return allCourseList.map((course) => ({
            topic: course.topic,
            postTitle: course.postTitle,
            objectivesTitle: course.objectivesTitle,
            price: course.price,
            status: course.status,
        }))
    }

    const filteredData = tableData().filter((person) => {
        if (minPrice !== undefined && person.price < minPrice) {
            return false
        }
        if (maxPrice !== undefined && person.price > maxPrice) {
            return false
        }
        if (status !== undefined && person.status !== status) {
            return false
        }
        return true
    })

    const totalData = filteredData.length

    const [data, setData] = useState(() => filteredData)

    useEffect(() => {
        setData(filteredData)
    }, [allCourseList, minPrice, maxPrice, status])

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
        enableColumnResizing: true,
        columnResizeMode: 'onChange',
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    const onPaginationChange = (page: number) => {
        table.setPageIndex(page - 1)
    }

    const onSelectChange = (value = 0) => {
        table.setPageSize(Number(value))
    }

    return (
        <Container>
            <Dialog
                isOpen={dialogIsOpen}
                bodyOpenClassName="overflow-hidden"
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
            >
                <h5 className="mb-4">
                    Would you like to permanently delete this user ?
                </h5>
                <p>Once deleted, this user will no longer be accessible.</p>
                <div className="text-right mt-6">
                    <Button
                        className="ltr:mr-2 rtl:ml-2 capitalize"
                        variant="twoTone"
                        onClick={onDialogClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="capitalize"
                        variant="solid"
                        onClick={onDialogOk}
                        color="red-600"
                    >
                        Permanently delete
                    </Button>
                </div>
            </Dialog>

            <div className="flex gap-[15px] mt-[10px] mb-10 items-end">
                {/* <div>
                    <p className="text-[15px] text-[#444444] font-[700] mb-[4px]">
                        Status:
                    </p>
                    <select
                        className="py-[8px] pl-[8px] rounded-[7px] border-[1.6px]"
                        value={status || ''}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                    </select>
                </div> */}
                <div>
                    <p className="text-[15px] text-[#444444] font-[700] mb-[4px]">
                        Price Range:
                    </p>
                    <div className="flex">
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice || ''}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            className="py-[8px] pl-[8px] rounded-[7px] border-[1.6px] mr-2"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice || ''}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            className="py-[8px] pl-[8px] rounded-[7px] border-[1.6px]"
                        />
                    </div>
                </div>

                <div>
                    <button className="border-[1px] hover:border-[2px] py-[7px] px-[18px] rounded-[5px] hover:border-[#4f46e5] font-[600] bg-[#fff]">
                        Search
                    </button>
                </div>
            </div>

            <Table>
                {/* Table Headers */}
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    style={{
                                        position: 'relative',
                                        width: header.getSize(),
                                        textAlign: 'center',
                                    }}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className: `${
                                                    header.column.getCanSort()
                                                        ? `table-resizer flex items-center justify-center cursor-all-scroll cursor-pointer  w-full   ${
                                                              header.column.getIsResizing()
                                                                  ? 'isResizing'
                                                                  : ''
                                                          }`
                                                        : ''
                                                }`,
                                                onClick:
                                                    header.column.getToggleSortingHandler(),
                                            }}
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            <Sorter
                                                sort={header.column.getIsSorted()}
                                            />
                                        </div>
                                    )}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </THead>

                {/* Table Body */}
                <TBody>
                    {table.getRowModel().rows.map((row, index) => {
                        const isOdd = index % 2 === 0
                        const rowClassName = isOdd
                            ? 'text-center bg-[#f5f5f5]'
                            : 'text-center'
                        return (
                            <Tr key={row.id} className={rowClassName}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td
                                            key={cell.id}
                                            style={{
                                                width: cell.column.getSize(),
                                                textAlign: 'center',
                                            }}
                                        >
                                            {cell?.column?.columnDef
                                                .accessorKey === 'userStatus' ? (
                                                row.original
                                                    .userStatus ? (
                                                    <Tag className=" capitalize text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                                                        Pending
                                                    </Tag>
                                                ) : (
                                                    <Tag className="bg-emerald-100 capitalize text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 ">
                                                        approved
                                                    </Tag>
                                                )
                                            ) : (
                                                flexRender(
                                                    cell.column
                                                        .columnDef.cell,
                                                    cell.getContext()
                                                )
                                            )}
                                        </Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
        </Container>
    )
}

export default CourseFilter
