import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 height: 200px">
                        <div class="card-group">
                            <div class="card mr-2 mt-2">
                                <img src="jensen.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card mr-2 mt-2">
                                <img src="kristen.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card mt-2">
                                <img src="kgbg.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text"></p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
