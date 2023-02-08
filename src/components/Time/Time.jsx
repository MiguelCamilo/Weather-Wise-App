
export default function Time() {

    const showTime = () => {
        const date = new Date()
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    }

    return (
        <>
            <p className="mb-5">{showTime()}</p>
        </>
    )
}