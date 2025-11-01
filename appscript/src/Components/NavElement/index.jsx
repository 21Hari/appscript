import './index.css'

const NavElement = () => {
    return (
        <div className="nav-container">
            <div className="child-nav-element">
                <div>
                    <img src="https://res.cloudinary.com/dmdxccmkl/image/upload/fl_preserve_transparency/v1761972258/Logo_egzqep.jpg?_s=public-apps" alt="logo" />

                </div>
                <h2>LOGO</h2>
                <div>
                    <img src="https://res.cloudinary.com/dmdxccmkl/image/upload/fl_preserve_transparency/v1761972495/Icons_xrz2sd.jpg?_s=public-apps" alt="search" />
                </div>
            </div>
            <div className='inner-child-nav-element'>
                <div className='nav-elements'>
                    <h3>SHOP</h3>
                    <h3>SKILL</h3>
                    <h3>STORES</h3>
                    <h3>ABOUT</h3>
                    <h3>CONTECT US</h3>
                </div>
            </div>
        </div>
    )

}
export default NavElement;