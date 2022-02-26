const Total = ({courses}) => {
    let sum = 0;
    courses.forEach((course, index) => {
        sum += course.exercises;
    })
    return (
        <h3>Number of exercises: {sum}</h3>
    )
}

export default Total;