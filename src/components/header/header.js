import { Component } from 'react'
import Nav from '../nav'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Nav />
            </div>
        )
    }
}

export default Header