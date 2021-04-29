import '../styles/output.css'
import React, {useState, useEffect} from 'react'
import FindingRect from './FindingRect'
import db from './Firebase'
import Circle from './Circle'

function GamePage(props) {
    const [visible, setVisible] = useState(false);
    const [mouseX, setMouseX] = useState();
    const [mouseY, setMouseY] = useState();
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        if (props.characters.length === 0) return
        if (props.characters.length === circles.length) {
            alert('You win!')
            props.reset();
        } ;
    }, [props.characters, circles, props])
    
    function checkChar(imgId, charName) {
        db.collection(imgId).doc(charName).get().then((doc) => {
            let x = Math.abs(doc.data().xcoord - mouseX);
            let y = Math.abs(doc.data().ycoord - mouseY);
            if(x <= 45 && y <= 45){
                let searchElement = document.getElementById('searchBox')
                let b = <Circle leftC={getComputedStyle(searchElement).left} topC={getComputedStyle(searchElement).top}/>
                document.getElementById(charName).disabled = true;
                searchElement.style.display='none';
                setVisible(false);
                setCircles([...circles, b])
            }
        });
    }

    function visibilityHandler(e){
        const searchBox = document.getElementById('searchBox') ;
        if (visible && e.target !== searchBox){
            searchBox.style.display = 'none';
            setVisible(false);
        }
        if(!visible){ 
            let rect = e.target.getBoundingClientRect();
            setMouseX(e.clientX - rect.left);
            setMouseY(e.clientY - rect.top);
            searchBox.style.left = (e.pageX - 50) + 'px';
            searchBox.style.top = (e.pageY - 50) + 'px';
            searchBox.style.display = 'block';
            setVisible(true);
        }
    }

    return(
        <div className='waldoDiv'>
            <FindingRect checker={checkChar} imageOpened={props.gameStage.id} characters={props.characters}/>
            {circles}
            <img id={props.gameStage.id} src={props.gameStage.img} alt ='Stage' onClick={(e)=> visibilityHandler(e)}></img>         
        </div>
    )
}
export default GamePage