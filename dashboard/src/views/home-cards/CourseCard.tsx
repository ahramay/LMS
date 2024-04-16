import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CiDollar } from 'react-icons/ci'
import { MdMenuBook } from 'react-icons/md'
import { Course } from '@/@types'
import { useAppDispatch } from '../Customers/store'
import { setCourse, setMode, useAppSelector } from '@/store'
import { Button, Tooltip } from '@/components/ui'
import { HiOutlinePencil } from 'react-icons/hi'

interface IProps {
    data: Course
}
const CourseCard = (props: IProps) => {
    const navigation = useNavigate()
    const { data } = props
    const { user } = useAppSelector((state) => state.auth)
    const isCreator = data.createdBy._id === user._id
    const dispatch = useAppDispatch()
    const handleCardClick = () => {
        navigation(`/course/${data._id}`)
        dispatch(setCourse({ ...data }))
    }
    const onCourseEdit = (e: any) => {
        e.stopPropagation()
        dispatch(setCourse({ ...data }))
        dispatch(setMode('edit'))
        navigation(`/editcourse/${data._id}`)
    }
    return (
        <>
            {data ? (
                <div
                    key={data._id}
                    className="flex cursor-pointer flex-col border hover:shadow-2xl rounded-md justify-start ms-4"
                    onClick={() => handleCardClick()}
                >
                    <div className="overflow-hidden">
                        <img
                            decoding="async"
                            className="w-full htransition duration-300 ease-in-out hover:scale-110 h-48 rounded-t-md"
                            src={data.image}
                            alt="courseThambnail"
                        />
                    </div>

                    <div className="p-5">
                        <div className="flex flex-row justify-between  ">
                            <h6 className="text-3xs  text-black mb-2">
                                {data.title}
                            </h6>
                            <h6 className="text-3xs  flex flex-row w-fit xl:w-full justify-start  xl:justify-end items-center text-green-500 line-clamp-1 mb-2">
                                <MdMenuBook className="mr-1 text-xl " />
                                <p className="line-clamp-1">{data.modality}</p>
                            </h6>
                        </div>

                        <h4 className="text-lg  text-black mb-4 ">
                            {data.topic}
                        </h4>
                        <div className="flex  justify-between  flex-wrap xl:flex-nowrap">
                            <h6 className="text-3xs  flex flex-row justify-end  xl:justify-start w-fit xl:w-full items-start text-green-500 mb-2">
                                <CiDollar className="mr-1 text-xl" />
                                {data.price}
                            </h6>
                            <h6 className="text-3xs font-bold text-dark-blue mb-2">
                                {data.duration}
                            </h6>
                        </div>
                        <hr />
                        {isCreator && (
                            <Tooltip title="Edit">
                                <Button
                                    shape="circle"
                                    variant="plain"
                                    size="sm"
                                    icon={<HiOutlinePencil />}
                                    onClick={onCourseEdit}
                                />
                            </Tooltip>
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default CourseCard
