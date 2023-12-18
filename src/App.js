import './App.css';
import logo from './img/logo.png';
import Button from './components/Button';
import Counter from './components/Counter'
import { useState } from 'react';

function App() {

    const  [numClicks, setNumClicks] = useState(0);

    const gestionClick =()=>{
        //console.log('click');
        setNumClicks(numClicks+1);
    };

    const resetCounter = ()=>{
        //console.log('reset');
        setNumClicks(0);
    };

    return ( 
    <div className = "App">
        <div className = 'logo-container'>
            <img className = 'logo'src = { logo } alt = 'logo'/>
        </div> 
        <div className='container-main'>
            <Counter numClicks={numClicks}/>
            <Button
                text='click'
                isButtonClick={true}
                gestionClick={gestionClick}/>
            <Button
                text='Reset'
                isButtonClick={false}
                gestionClick={resetCounter}/>
        </div>
    </div>
    );
}

export default App;