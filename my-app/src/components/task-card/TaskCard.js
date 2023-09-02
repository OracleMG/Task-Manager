import './TaskCard.css';

function TaskCard(){
    return (<div className="card-wrapper">
        <div className='card-header'>
            <p>T-1</p>
            <div className='badge'>
                <p>Todo</p>
            </div>
        </div>
        <div className='card-content'></div>
        <div className='card-footer'></div>
        Some text
        </div>);
}

export default TaskCard;

