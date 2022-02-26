import Statistic from "./Statistic"

const Statistics = ({ good, bad, neutral }) => {
    let total = good + bad + neutral

    if(total) {
        return(
            <>
                <table>
                    <tbody>
                        <Statistic text={"Good"} count={good} />
                        <Statistic text={"Neutral"} count={neutral} />
                        <Statistic text={"Bad"} count={bad} />
                        <Statistic text={"All"} count={good + bad + neutral} />
                        <Statistic text={"Average"} count={total ? (good - bad) / total : 0} />
                        <Statistic text={"Positive"} count={`${total ? (good / total) * 100 : 0}%`} />
                    </tbody>
                </table>
            </>
        )
    }
    return <p>No Feedback Given</p>
    
}

export default Statistics