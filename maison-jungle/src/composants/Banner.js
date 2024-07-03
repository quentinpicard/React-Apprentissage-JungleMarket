import '../style/Banner.css';
// import logo from'../asset/logo.png';

function Banner({children}){
    return (
        <div className="lmj-banner">
            <div className='lmj-title-logo'>
                {/* <img src={logo} alt='logo de la maison jgl' className='lmj-logo'></img> */}
                {/* <h1 className='lmj-title'>{children}</h1> */}
                {children}
            </div>
        </div>
        
    )
}
export default Banner;

