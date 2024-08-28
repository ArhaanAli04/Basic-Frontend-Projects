function Navbar(){
    return(<nav className="nav">
        <a href="/" className="site-title">Site name</a>
        <ul>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>);
}
export default Navbar;