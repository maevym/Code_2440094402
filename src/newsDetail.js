import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import './newsDetail.css';
import Footer from './Footer'

class newsDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgIsValid : this.props.location.state.img,
            authorIsValid : this.props.location.state.author
        }
    }


    render() {
        const imgValidation = () => {
            if(this.state.imgIsValid === null){
                // return (
                // )
            }else{
                return (
                    <div>
                    <img className="foto" src={this.props.location.state.img} alt={this.props.location.state.title} />
                    </div>
                )
            }
        }

        const authorValidation = () => {
            if(this.state.authorIsValid === null){
                return (
                    <h2>Author : Unknown</h2>
                )
            }else{
                return (
                    <h2>Author : {this.props.location.state.author}</h2>
                )
            }
        }

        return (
            <div className='hasil'>
                <Menu />
                <button><NavLink className='BackLink' to="/search"><i class="fa fa-arrow-left" aria-hidden="true"></i> BACK</NavLink></button>
                <h1>{this.props.location.state.title}</h1>
                {imgValidation()}
                {authorValidation()}
                <p>{this.props.location.state.description}</p>
                <p>URL : {this.props.location.state.url} <a href={this.props.location.state.url} target="_blank">Click Here</a></p>
                <Footer />
            </div>
        )
    }
}

export default newsDetail;
