import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight'; 

const Header = () => {
    return(
        <div className="Header">
            <div className="HeaderLeft">
                <HeaderLeft />
            </div>
            <div className="HeaderRight">
                <HeaderRight />
            </div>
        </div>
    );

};
export default Header;
