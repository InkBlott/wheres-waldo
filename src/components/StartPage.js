import StageSelector from './StageSelector'
import stages from './stageImages'

function StartPage(props){
    const mappedStages = stages.map(img => <StageSelector stage={img} imgSetter={props.imgSetter} stageSetter={props.setStage} setChars={props.setChars}/>)

    return (
        <div className='container'>
            <h1>
                <span>Where's Waldo?</span>
            </h1>
            <h2>Select a stage:</h2> 
            {mappedStages}
        </div>
    )

}

export default StartPage