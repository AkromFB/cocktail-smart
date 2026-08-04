import { NavLink } from 'react-router-dom'
function TopBar(){
    return(<nav className="top-bar">
          <div className="top-bar-inner">
            <span className="brand">Cocktail Smart</span>

            <div className="links">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
              >
                Home
              </NavLink>

              <NavLink
                to="/learn"
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
              >
                Learn
              </NavLink>
            </div>
          </div>
        </nav>)
}

export default TopBar