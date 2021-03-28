function FindingRect(props){

    return(
        <div className='findingRect' id='searchBox'>
            <div className='findingRectButtons'>
                <button id='Waldo' onClick={(e) => props.checker(props.imageOpened, 'Waldo')}>Waldo</button>
                <button id='Thief' onClick={(e) => props.checker(props.imageOpened, 'Thief')}>Thief</button>
                <button id='SilverTrophy' onClick={(e) => props.checker(props.imageOpened, 'SilverTrophy')}>Silver Trophy</button>
            </div>

        </div>
    )

}
export default FindingRect