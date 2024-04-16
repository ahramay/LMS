import React, { useEffect, useRef, useState } from 'react'
import CourseDetail from './CourseDetail'
import { CourseState, getAllCourses, useAppDispatch, useAppSelector } from '@/store'
import { useParams } from 'react-router-dom'
import { Course as ICourse } from '@/@types'

function Course() {
    const { courseId } = useParams<{ courseId: string }>()
    const dispatch = useAppDispatch()
    const isRendering = useRef(false)
    const { selectedCourse, allCourseList }: CourseState = useAppSelector((state) => state.courseSlice)
    let localCourse: ICourse | undefined = selectedCourse

    useEffect(() => {
        if (allCourseList.length === 0 && !isRendering.current) {
            dispatch(getAllCourses())
            isRendering.current = true
        }
    }, [])
    if (allCourseList.length > 0 && isRendering.current) {
        const findCourse = allCourseList.find(
            (course: ICourse) => course._id === courseId
        )
        localCourse = findCourse
    }

    return (
        <>
            <div className="image-container">
                <div className="overlay-text">
                    <h2 className="text-1xl text-center lg:text-3xl font-bold text-white mb-4">
                        Course Details
                    </h2>
                    <h5 className="text-white text-xl text-center mb-3 ">
                        Home / Course Details
                    </h5>
                </div>
                <img
                    src={localCourse?.image}
                    alt="img"
                    style={{ filter: 'contrast(0.5)' }}
                />
            </div>
            <div className="w-full rounded-lg ">
                <div className="grid grid-cols-1 m-auto  gap-8 ">
                    {localCourse && <CourseDetail courseDetail={localCourse} />}
                </div>
            </div>
        </>
    )
}

export default Course
