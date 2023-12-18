import './App.css';
import logo from './img/logo.png';
import Button from './components/Button';

function App() {

    const gestionClick =()=>{
        console.log('click');
    };

    const resetCounter = ()=>{
        console.log('reset');
    };

    return ( 
    <div className = "App">
        <div className = 'logo-container'>
            <img className = 'logo'src = { logo } alt = 'logo'/>
        </div> 
        <div className='container-main'>
            <Button
                text='click'
                isbuttonClick={true}
                gestionClick={gestionClick}/>
            <Button
                text='Reset'
                isbuttonClick={false}
                gestionClick={resetCounter}/>
        </div>
    </div>
    );
}

export default App;