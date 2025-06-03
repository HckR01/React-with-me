const NavBar =()=>{
      return(
             <nav className="container">
      
      <div className="logo">
        <img src="/image/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
        <li href="#">Blog</li>
      </ul>

      <button>Login</button>
    </nav>
      )
}

export default NavBar;
// This code defines a functional component called NavBar that renders a navigation bar with a logo, a list of links, and a login button. The component is exported for use in other parts of the application. The logo is displayed using an image element, and the links are represented as list items within an unordered list. The button is styled as a login button.