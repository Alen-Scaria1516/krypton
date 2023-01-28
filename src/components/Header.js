import logo from '../images/logo.svg'
const Header = () => {
    
    return ( 
        <div className="header">
            <img className="logo"  src={logo}/>
            <h1 className="logo-text">KRYPTON</h1>
        </div>
     );
}
 
export default Header;