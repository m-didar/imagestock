import React, { Component } from 'react'
import Tape from "../tape";
import './home.css'
import Search from "../search";

class Home extends Component {
    render() {
        return (
            <div className="body">
                <Search />
                <div className="body-gridbtn">
                    <div className="gridbtn_elem">
                        <div className="gridbtn_elem-bk bk-2"></div>
                        <div className="gridbtn_elem-bk bk-2"></div>
                    </div>
                    <div className="gridbtn_elem">
                        <div className="gridbtn_elem-bk bk-4"></div>
                        <div className="gridbtn_elem-bk bk-4"></div>
                        <div className="gridbtn_elem-bk bk-4"></div>
                        <div className="gridbtn_elem-bk bk-4"></div>
                    </div>
                </div>
                <Tape />
            </div>
        )
    }
}

export default Home

