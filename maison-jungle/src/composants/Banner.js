import '../style/Banner.css';
import logo from'../asset/logo.png';

function Banner(){
    const title = "La maison jungle";
    return (
        <div className="lmj-banner">
            <div className='lmj-title-logo'>
                <img src={logo} alt='logo de la maison jgl' className='lmj-logo'></img>
                <h1 className='lmj-title'>{title}</h1>
            </div>
        </div>
        
    )
}
export default Banner;

