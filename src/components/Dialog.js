// buttonData is an array of maps where
// label: string
// callback: void function()

const Dialog = ({ title, description, onClose, buttonData }) => (
    <div className="darkener">
        <div className='dialog'>
            <div className="top_bar">
                <span>{title}</span>
                {onClose && <button type="button" className="bi bi-x" onClick={onClose} />}
            </div>
            <div className="description">{description}</div>
            <div className="button_row">{
                buttonData.map((data, i) => <button className="btn btn-primary text-white" key={i} onClick={data.callback}>{data.label}</button>)}</div>
        </div>
    </div>
);

export default Dialog