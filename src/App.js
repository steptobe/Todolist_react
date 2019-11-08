import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import logo from './logo.svg';
import './App.css';
import AppList from './components/todoList';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            choosevalue : 1,
            data:this.props.data
        }
    }
    ChooseValue (id) {
        this.setState({choosevalue:id});
    }
    
    onAddTodoItem(newItem) {
        let newdata = this.state.data.concat(newItem);
        this.setState({data:newdata});
    }
    AllChangeComplete (id) {
        let newdata = this.state.data.map((item,index) => {
            if(item.id === id) {
              item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data : newdata});
      }
    
    AllOnDeleteItem (id) {
        console.log(id);
        let newdata = this.state.data.map(function (item) {
          console.log(item);
          if (item.id == id) {
            item.deleteFlag = true
          }
          return item
        })
        this.setState({ data: newdata })
      }
    render(){
        return ( 
            <div>
                <h1>My Todo with React</h1>
                <TodoInput  AddTodoItem={this.onAddTodoItem.bind(this)} />
                <AppList data={this.state.data} 
                choosevalue={this.state.choosevalue}  
                ChangeComplete={this.AllChangeComplete.bind(this)} 
                 DeleteItem={this.AllOnDeleteItem.bind(this)}  />
            </div>
        );
    }
}

export default App;