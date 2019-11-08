import React, {Component} from 'react';
import CardList from './CardList';
import {kittens} from './kittens';
import SearchBox from './SearchBox';
import "./App.css"



;class App extends Component  {

    constructor() {
        super() 
            this.state = {
                kittens: kittens,
                searchfield: ''
            }
    }


    onSearchChange = (event) => {
       this.setState({
           searchfield: event.target.value
       })


    }




    render() {
        const filteredKittens = this.state.kittens.filter(kittens => {
            return kittens.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">Crazy Kittens!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList kittens={filteredKittens} />
            </div>
        )
    }

}

export default App;