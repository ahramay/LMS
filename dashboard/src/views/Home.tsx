import CardWithInfo from "@/components/ui/CardWithInfo/CardWithInfo"
import CourseCardInfoHome from "@/components/ui/CardWithInfo/CourseCardInfoHome"
import {HiPlusCircle} from 'react-icons/hi'

const Home = () => {

    const handleClick = () => {
        console.log("clicked on card")
    };
    const textData = {
        leadCount: 10,
        leadText: 'Lead',
        tagText: 'Tag Text',
        subTagText:'lorem',
    };
    const tagIcon = <HiPlusCircle className="text-base mr-1 rtl:ml-1"/>;
    const icon = <HiPlusCircle />;

    const textDataCourse = {
        numbers: 10,
        percent: 40,
        text:'lorem',
    };

    return (
        <>
            Home Dashborad
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 py-4">
               {
                   [0,12,3,4].map(item => <CardWithInfo  key={item} onClick={handleClick} icon={icon} textData={textData} tagIcon={tagIcon} />)
               }
               <CourseCardInfoHome onClick={handleClick} icon={icon} textDataCourse={textDataCourse} />
            </div>
            
        </>
    )
}

export default Home