import useQuery from '@/utils/hooks/useQuery'
import React from 'react'
import Container from '@/components/shared/Container'
import { Segment } from '@/components/ui'
import { HiCheckCircle,HiOutlineUser,HiClock } from 'react-icons/hi'
import { useState } from 'react'
import classNames from 'classnames'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Avatar from '@/components/ui/Avatar'
import Tooltip from '@/components/ui/Tooltip'
import IconText from '@/components/shared/IconText'

import ProfileEdit from './profileEdit/ProfileEdit'
import ContactInfoEdit from './contantInfo/ContactInfoEdit'
import EditAddress from './addressInfo/EditAddress'

type tabSectionType =
    | 'Profile'
    | 'Contant Info'
    | 'Address'
    | 'Courses'
    | 'Note'
    | 'Card'
    | 'Certificates Approvals'
    | 'Profile Picture Approval'
    | 'Ordred Cards'

const EditUser = () => {
    const [tabSectionType, settabSectionType] = useState('Profile')

    const query = useQuery()
    const userId = query.get('userId')

    const idUserVerified = true

    const [segmentSelections, setSegmentSelections] = useState<
        { value: tabSectionType; disabled: boolean }[]
    >([
        { value: 'Profile', disabled: false },
        { value: 'Contant Info', disabled: false },
        { value: 'Address', disabled: false },
        { value: 'Courses', disabled: false },
        { value: 'Note', disabled: false },
        { value: 'Card', disabled: false },
        { value: 'Certificates Approvals', disabled: false },
        { value: 'Profile Picture Approval', disabled: false },
        { value: 'Ordred Cards', disabled: false },
    ])

    
    const cardFooter = (
        <div className="flex justify-end">
            <Button size="sm" variant="solid">
                update
            </Button>
        </div>
    )

    const handleTabSection = (newValue: tabSectionType) => {
        settabSectionType(newValue)
    }

    console.log(tabSectionType)

    return (
        <Container>
            <div className="flex flex-auto min-w-0 md:flex-row flex-col gap-4">
                <div className="md:w-[70%] w-full">
                    <div className="border">
                        <div className="bg-[#f5f5f5] p-6 ">
                            <Segment
                                defaultValue={['Profile']}
                                className="gap-4 flex-wrap"
                            >
                                {segmentSelections.map((item) => (
                                    <Segment.Item
                                        key={item.value}
                                        value={item.value}
                                        disabled={item.disabled}
                                    >
                                        {({
                                            active,
                                            value,
                                            onSegmentItemClick,
                                            disabled,
                                        }) => {
                                            return (
                                                <div
                                                    className={classNames(
                                                        'flex',
                                                        'ring-1',
                                                        'justify-between',
                                                        'border',
                                                        'rounded-md ',
                                                        'border-gray-300',
                                                        'py-2 px-2',
                                                        'cursor-pointer',
                                                        'select-none',
                                                        'w-100',
                                                        'md:w-[180px]',
                                                        active
                                                            ? 'ring-cyan-500 border-cyan-500'
                                                            : 'ring-transparent',
                                                        disabled
                                                            ? 'opacity-50 cursor-not-allowed'
                                                            : 'hover:ring-cyan-500 hover:border-cyan-500'
                                                    )}
                                                    onClick={() => {
                                                        onSegmentItemClick()
                                                        handleTabSection(item.value)
                                                    }}
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold text-black">
                                                            {value}
                                                        </p>
                                                    </div>
                                                    {active && (
                                                        <HiCheckCircle className="text-cyan-500 text-xl" />
                                                    )}
                                                </div>
                                            )
                                        }}
                                    </Segment.Item>
                                ))}
                            </Segment>
                        </div>
                        {
                            tabSectionType === 'Profile' && <ProfileEdit/>   
                        }
                        {
                            tabSectionType === 'Contant Info' && <ContactInfoEdit/>   
                        }
                        {
                            tabSectionType === 'Address' && <EditAddress/>   
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default EditUser
