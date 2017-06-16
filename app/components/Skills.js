import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

export default class Skills extends Component{
    state ={
        books: [],
        loading: true,
        error:  null,
        inputValue: ''
    };

    onChangeHandler = (e)=> {
        this.setState({inputValue: e.target.value})
    };

    componentDidMount(){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBuqd93M9d5bCceRuFfwJJgKFswjgTJixs')
            .then(result =>{
                this.setState({
                    books: result.data.items,
                    loading: false,
                    error:  null
                });
            })
            .catch(errormes =>{
                this.setState({
                    loading: false,
                    error:  errormes
                });
            })
    }

    renderLoading(){
        return(
            <div className="loading">Loading</div>
        )
    }

    renderError(){
        return(
            <div>Error....{this.state.error.message}</div>
        )
    }

    renderBooks(){
        const {error, books} = this.state;
        if(error){
            return this.renderError;
        }

        let inputValueLet = this.state.inputValue.trim().toLowerCase();

        let booksNewArray=[];
        //фильтрация массива согласно введенного значения (обрабатывае и возвращает массив отфильтрованыx данных)
        if(books.length>0){
            booksNewArray = books.filter(function (letters) {
                return letters.volumeInfo.title.toLowerCase().match( inputValueLet )
            });
        }

        return(
            <div className="books-container">
                {booksNewArray.map(books => {
                    return (
                        <div className="item" key={books.id}>
                            <div className="img-container"><img src={books.volumeInfo.imageLinks.smallThumbnail}/></div>
                            {/*<div><span className="desc">Language: </span>{books.original_language}</div>*/}
                            <div><span className="desc">Title: </span>{books.volumeInfo.title}</div>
                            <div><span className="desc">Description: </span>{books.volumeInfo.description}</div>
                            {/*<div><span className="desc">Raiting: </span>{books.vote_count}</div>*/}
                        </div>
                    )
                })}
            </div>
        );
    }


    render(){

        const {loading} = this.state;

        return(
            <div>
                <h1>Book Store125</h1>
                <form className="form-inline">
                    <FormGroup>
                        <FormControl
                            className='form-control'
                            value={this.state.inputValue}
                            onChange={this.onChangeHandler}
                            defaultValue=''
                            placeholder='Choose title'
                        />
                    </FormGroup>
                </form>
                { loading ? this.renderLoading() : this.renderBooks()}
            </div>
        );
    }

}

