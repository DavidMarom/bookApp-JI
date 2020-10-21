import React, { Component } from 'react'
import { Stars } from '../cmps/Stars'
import { getBooks } from '../services/bookService'

export class BookDetails extends Component {

    state = {
        currBook: 3,
        Books: getBooks()
    }

    componentDidMount() {
    }

    // fClickHandler = () => {
    //     console.log('Forward');
    //     if (this.state.currBook < this.state.Books.length) {

    //         this.setState({this.state.currBook:currBook+1})
    //     }
    // }


    onclick(type) {
        this.setState(prevState => {
            return { currBook: type == 'inc' ? prevState.currBook + 1 : prevState.currBook - 1 }
        });
    }


    render() {
        if (this.state.Books === null) { return <h1>loading</h1> }
        return (
            <div className="rb">
                <div className="page-btn" onClick={this.onclick.bind(this,'dec')}><p>back</p></div>
                <div className="ca w400 bg-02 mrg-v-100 pad-30" >
                    <div className="rb">
                        <h3>{this.state.Books[this.state.currBook].title}</h3>
                        <input type="checkbox"></input>
                    </div>

                    <div className="hor-line"></div>

                    <div className="author-name"><p>{this.state.Books[this.state.currBook].author}</p></div>

                    <div className="book-details">
                        <p>
                            {this.state.Books[this.state.currBook].description}
                        </p>
                    </div>

                    <Stars number={this.state.Books[this.state.currBook].rating} />

                    <p>Price: ${this.state.Books[this.state.currBook].price}</p>
                    <p>{this.state.currBook}</p>

                </div>
                <div className="page-btn" onClick={this.onclick.bind(this,'inc')}><p>forward</p></div>
            </div>
        )
    }
}