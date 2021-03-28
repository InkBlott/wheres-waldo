function FindingRect(props){

    return(
        <div className='findingRect' id='searchBox'>
            <div className='findingRectButtons'>
                <button onClick={(e) => props.checker('sports-img', 'Waldo')}> Waldo</button>
                <button onClick={() => {console.log()}}> b</button>
                <button> c</button>
            </div>

        </div>
    )

}
export default FindingRect