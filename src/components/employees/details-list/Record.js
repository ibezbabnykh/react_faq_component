const Record = ({ label, field }) => {
    return <div className="group">
        <strong className="label">{label}</strong>
        <div>{field}</div>
    </div>
}

export default Record;