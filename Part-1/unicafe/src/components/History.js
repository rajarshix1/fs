const History=(props)=>(
    props.lorr.length===0? <div>nothing</div> : <div>{props.lorr.join(' ')}</div>
)
export default History