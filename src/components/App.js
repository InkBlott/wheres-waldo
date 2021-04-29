import React, {useState} from 'react'
import GamePage from './GamePage'
import StartPage from './StartPage'
import db from './Firebase'

function App (){
    const [stageSelected, setStageSelected] = useState(false);
    const [stageImage, setStageImage] = useState({}); 
    const [characters, setCharacters] = useState([]);

    function setChars(stageId) {
        db.collection(stageId).get().then((qSnap) => {
            let arr = [];
            qSnap.forEach((doc) => {
                arr.push(doc.id);
            })
            setCharacters(arr)
        })
    }


    function stageSetter() {
        setStageSelected(!stageSelected);
    }

    return(
        <div>
            {stageSelected ?
                <GamePage gameStage = {stageImage} characters={characters} reset={stageSetter}/>
            :
                <StartPage imgSetter={setStageImage} setStage={stageSetter} setChars={setChars}/>
            }
        </div>
    )
}

export default App