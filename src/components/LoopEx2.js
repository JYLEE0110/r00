const LoopEx2 = ({ start, end }) => {

    console.log("start", start, "end", end)

    const arr = []

    for (let i = start; i <= end; i++) {
        arr.push(<li key={i}>AAA{i}</li>)
    }

    return (
        <>
            {arr}
        </>
    );
}

export default LoopEx2;