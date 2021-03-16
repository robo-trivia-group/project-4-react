import { Link } from 'react-router-dom';
function HeaderComponent() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/"><h1>Robo Trivia</h1></Link>  
      </div>  
    </header>
  )
}

export default HeaderComponent
