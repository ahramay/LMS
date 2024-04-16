import Container from '@/components/shared/Container'
import AdaptableCard from '@/components/shared/AdaptableCard'
import AddCourse from './components/addCourse'
import reducer from './store'
import { injectReducer } from '@/store'

injectReducer('knowledgeBaseManageCourse', reducer)

const ManageCourse = () => {
    return (
        <Container>
            <AdaptableCard>
                <AddCourse />
            </AdaptableCard>
        </Container>
    )
}

export default ManageCourse
