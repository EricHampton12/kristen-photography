import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light bg-light mt-1">
                    <a class="navbar-brand" href="#">KFH.</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active text-center text-white">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active text-center">
                                <a class="nav-link" href="#">Gallery</a>
                            </li>
                            <li class="nav-item active text-center">
                                <a class="nav-link" href="#">Pricing and Services</a>
                            </li>
                            <li class="nav-item active text-center">
                                <a class="nav-link" href="#">Make An Appointment</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
