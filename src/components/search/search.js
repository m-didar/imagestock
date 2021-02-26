import React, { Component } from 'react'
import './search.css'

class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="search-title">
                    Поиск
                </div>
                <div className="search-options">
                    <a href="/" className="search-options_elem">Wallpapers</a>
                    <a href="/" className="search-options_elem">Textures & Patterns</a>
                    <a href="/" className="search-options_elem">Nature</a>
                    <a href="/" className="search-options_elem">Current Events</a>
                    <a href="/" className="search-options_elem">Architecture</a>
                    <a href="/" className="search-options_elem">Business & Work</a>
                    <a href="/" className="search-options_elem">Film</a>
                    <a href="/" className="search-options_elem">Animals</a>
                    <a href="/" className="search-options_elem">Travel</a>
                    <a href="/" className="search-options_elem">Fashion</a>
                    <a href="/" className="search-options_elem">Food & Work</a>
                </div>
            </div>
        )
    }
}

export default Search