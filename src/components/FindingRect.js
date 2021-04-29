function FindingRect(props){

    const charButtons = props.characters.map(char => <button id={char} onClick={(e) => props.checker(props.imageOpened, char)}>{char}</button>)

    return(
        <div className='findingRect' id='searchBox'>
            <div className='findingRectButtons'>
                {charButtons}
            </div>

        </div>
    )

}
export default FindingRect