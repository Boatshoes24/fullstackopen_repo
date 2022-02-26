const Statistic = ({ text, count }) => {
    return(
        <tr>
            <td>{text}</td>
            <td>{count}</td>
        </tr>
    )
}

export default Statistic