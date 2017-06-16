import React, {Component} from 'react'
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Portfolio extends Component{
    //дефолтное состояние инпута
    state={
        inputValue: ''
    }
    //значение вводимое в инпут
    onChangeHandler = (e)=> {
        this.setState({inputValue: e.target.value})
    }

    render(){
        //выводимый массив
        let mvcLibrary =[
            {"mvc":"Angular"},
            {"mvc":"React"},
            {"mvc":"Angular 2"}
        ];
        //обработтка вводимого значения в инпут
        let inputValueLet = this.state.inputValue.trim().toLowerCase();
        let mvcLibraryNew = [];
        //фильтрация массива согласно введенного значения (обрабатывае и возвращает массив отфильтрованыx данных)
        if(mvcLibrary.length>0){
            mvcLibraryNew = mvcLibrary.filter(function (letters) {
                return letters.mvc.toLowerCase().match( inputValueLet )
            });
        }

        return(
           <div>
               <h1>MVC</h1>
               <form className="form-inline">
                   {/*<div className="form-group">*/}
                       <FormGroup>
                           <FormControl
                           className='form-control'
                           value={this.state.inputValue}
                           onChange={this.onChangeHandler}
                           defaultValue=''
                           placeholder='Get a MVC'
                           />
                       </FormGroup>
                   {/*</div>*/}
               </form>
               {/*вывод массива изначально всего, а потом с отфильтрованного массива mvcLibrary */}
               <ul>
                   { mvcLibraryNew.map(function (letters) {
                        return (
                         <li className="mvc_item" key={letters.mvc}>{letters.mvc}</li>
                        )}
                   )}
               </ul>
               </div>
        )
    }
}
