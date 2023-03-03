import './Header.css';
function Header() {
  return (
    <header className='App-Header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p> Edit <code>src/App.js</code> and save to reload. </p>
      <a 
        className='App-link' href='http://reactjs.org/'
        target='_blank'
      rel = 'noopener noreferrer' > Bryan A Quero </a>

   </header>   
  )
}

export default Header;