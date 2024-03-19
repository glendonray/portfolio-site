import { ReactComponent as Logo } from "../logo.svg";
function Header() {
  return (
    <header>
      <div className="logo-wrapper">
        <Logo className="logo" />
        <span className="site-title">Glendon Grapperhaus</span>
      </div>
    </header>
  );
}

export default Header;
