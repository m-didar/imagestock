import React, { Component } from 'react'
import { BrowserRouter as Router,Switch, Link } from 'react-router-dom'
import './tape.css'
import request from 'superagent'
import debounce from 'lodash.debounce'

const userId = "W9KS0BhwAMWgydITuCoNyl5bJhF8_BqsABwKUNCqc7g"
const baseUrl = "https://api.unsplash.com/"

class Tape extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            isLoading: false,
            currentPage: 1,
            photos: []
        }

        window.onscroll = debounce(() => {
            const {
                loadUsers,
                state: {
                    error,
                    isLoading,
                }
            } = this

            if (error || isLoading) return;

            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1800) {
                loadUsers()
            }
        }, 100)
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = () => {
        this.setState({isLoading: true}, () => {
            request
                .get(`${baseUrl}photos?page=${this.state.currentPage}&per_page=21&client_id=${userId}`)
                .then((res) => {
                    const nextPhotos = res.body.map(photo => ({
                        id: photo.id,
                        src: photo.urls.small,
                        user: {
                            name: photo.user.name,
                            username: photo.user.username,
                            profileImage: photo.user.profile_image.medium
                        },
                        download: photo.links.download
                    }))

                    this.setState({
                        isLoading: false,
                        currentPage: this.state.currentPage + 1,
                        photos: [
                            ...this.state.photos,
                            ...nextPhotos
                        ]
                    })
                })
                .catch(err => {
                    this.setState({
                        error: err.message,
                        isLoading: true
                    })
                })
        })
    }

    renderPhoto = photo => (
        <div className="tape-elem" key={photo.id}>
            <img className="tape-elem_img" src={photo.src} alt="" />
            <div className="tape-elem__hover">
                <div className="img-info">
                    <div className="profile-info">
                        <img className="profile-img"  src={photo.user.profileImage} alt="" />
                        {photo.user.name}
                        <span className="profile-username">
                                @{photo.user.username}
                            </span>
                    </div>
                    <div className="profile_btns">
                        <button className="profile-btn btn-like"><i className="fas fa-heart"></i></button>
                        <button className="profile-btn btn-expand"><Link to={`/${photo.id}`}><i className="fas fa-expand-alt"></i></Link></button>
                        <button className="profile-btn btn-download"><i className="fas fa-download"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )

    render() {
        const {
            error,
            isLoading,
            photos
        } = this.state

        let photosCol1 = []
        let photosCol2 = []
        let photosCol3 = []

        for (let i = 0; i < photos.length; i++) {
            if (i % 3 === 0)
                photosCol1.push(photos[i])
            else if (i % 3 === 1)
                photosCol2.push(photos[i])
            else
                photosCol3.push(photos[i])
        }

        return (
            <React.Fragment>
                <div className="tape">
                    {/*{tape}*/}
                    <div>
                        {photosCol1.map(this.renderPhoto)}
                    </div>
                    <div>
                        {photosCol2.map(this.renderPhoto)}
                    </div>
                    <div>
                        {photosCol3.map(this.renderPhoto)}
                    </div>
                </div>
                <div className="tape-status">
                    {isLoading &&
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                    }
                    {error &&
                    <div className="tape-error">
                        {error}
                    </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Tape