function StageSelector({stage, imgSetter, stageSetter, setChars}) {
    return(
        <div className='sSelector' onClick= { () => {
            imgSetter(stage);
            setChars(stage.id)
            stageSetter();
        }}>
            <img src={stage.img} id={stage.id} alt='game stage'></img>
        </div>
    )
}

export default StageSelector;