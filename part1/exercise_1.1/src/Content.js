import Part from "./Part";

const Content = ({courses}) => {
    return (
        <>
            {courses.map((course, index) => {
                return <Part course={course} key={index}/>
            })}
        </>
    )
}

export default Content;