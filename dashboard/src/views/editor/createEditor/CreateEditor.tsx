import React from 'react'
import Container from '@/components/shared/Container'
import AdaptableCard from '@/components/shared/AdaptableCard'
import GetUserRole from '@/components/shared/GetUserRole'
import NewEditorform from './NewEditorform'
const CreateEditor = () => {
  return (
    <Container>
        <AdaptableCard>
            <div className="flex items-center gap-4 pb-4">
                    <h3 className='inline dark:text-white'>Create a New Editor</h3>
                    <GetUserRole/>
            </div>
            <NewEditorform/>

        </AdaptableCard>
    </Container>
  )
}

export default CreateEditor