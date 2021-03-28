import '../styles/output.css'
import React, {useState} from 'react'
import FindingRect from './FindingRect'
import waldoImg1 from '../images/WWally1.jpg'
import db from './Firebase'
import Circle from './Circle'

function App() {
    const [visible, setVisible] = useState(false);
    const [mouseX, setMouseX] = useState();
    const [mouseY, setMouseY] = useState();
    const [circles, setCircles] = useState([]);

    
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
            console.log(mouseX, mouseY);
        }
    }

    return(
        <div className='waldoDiv'>
            <FindingRect checker={checkChar} imageOpened='sports-img'/>
            {circles}
            <img id='sports-img' src={waldoImg1} alt ='Wheres Waldo' onClick={(e)=> visibilityHandler(e)}></img>            
        </div>
    )
}
export default App