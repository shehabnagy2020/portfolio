import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <article className="education" id="education">
                <h1>education</h1>
                <section className="education-content">
                    <div className="univercity">
                        <h2>el-shorouk academy</h2>
                        <p>bachelor of science</p>
                        <h3>computer science - web development track</h3>
                    </div>
                    <div className="grad-date">
                        septemper 2016 - may 2020
                    </div>
                </section>
            </article>
        )
    }
}
