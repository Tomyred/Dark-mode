import moon from './assets/moon.png'
import sun from './assets/sun.png'
import './App.css';
import { useState } from 'react';

function App() {


  const [themeToggler, setThemeToggler] = useState(true)
  const [darkMode, setDarkmode] = useState(["app","bottom", sun, "Light "])


  const toggleDarkMode = () =>{
    setThemeToggler(!themeToggler)
    if (themeToggler){
      setDarkmode(["app-dark","bottom-dark", moon, "Dark " ])
    }else{
      setDarkmode(["app","bottom", sun, "Light "])
    }
  }

  return (
    
    <div className={darkMode[0]}>
     <div className="top">
       <h1>{darkMode[3]} Mode</h1>
       <img src={darkMode[2]} onClick={e => toggleDarkMode()} alt="logo" />
     </div>
     <div className="middle">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed voluptates nam eligendi veniam similique maxime consequuntur deserunt eum laborum, facere modi molestias consequatur dolor ipsum fugiat facilis magnam quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae quas quaerat in minima, nemo quos, facilis maxime fuga officia cupiditate dignissimos fugit pariatur, enim molestias quasi magnam placeat quam.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque amet, ab doloribus, excepturi expedita non repudiandae sequi obcaecati dolores nihil necessitatibus veritatis, maiores maxime quibusdam impedit repellendus aliquam earum!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente veniam tempora nisi repellendus non ea ut sunt quam, consequatur neque saepe sit, fugiat adipisci sint commodi laudantium! Quis, voluptatem!</p>
     </div>
     <div className={[darkMode[1]]}>
       <form onSubmit={e => e.preventDefault()} >
         <input/>
         <input/>
         <div className="buttons">
           <button className="button-exit">Exit</button>
         <button className="button-save">Save</button>
         </div>
         
       </form>
     </div>
    </div>
  );
}

export default App;
