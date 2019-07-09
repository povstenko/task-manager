import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputData from "./components/inputData";
import ListData from "./components/listData"

;


class App extends Component {
    state = {
          view: 'all',
          taskList: [
            {
                nameTask: "Приготовить Еды",
                dateTask: "2019-12-08",
                status: "done"

            },
            {
                nameTask: "Выполнить дз",
                dateTask: "2019-06-08",
                status: "danger"

            },
            {
                nameTask: "Написать код",
                dateTask: "2019-06-29",
                status: "current"

            }
        ]
    };

    switchTask = (e) => {
        let status = e.target.value;

        this.setState({view: status});
        console.log(this.state.view);
    };

    addTask = (e) => {
        e.preventDefault();

        let name = e.target.elements.task.value;
        let date = e.target.elements.date.value;

        let newTask = {
            nameTask: name,
            dateTask: date,
            status: "current"
        };

        let arrayTask = this.state.taskList;
        arrayTask.push(newTask);

        this.setState({taskList: arrayTask});
        console.log(this.state.taskList);
    };

    statusDone = (e) => {
        let index = e.target.value;
        let arrayList = this.state.taskList;
        arrayList[index].status = 'done';

        this.setState({taskList: arrayList});
    };

  render() {
    return (
      <div className="App">
        <InputData switchFunction={this.switchTask} frmSubmit={this.addTask}/>
        <ListData tasks={this.state.taskList} viewTask={this.state.view} statusDone={this.statusDone}/>
      </div>
    );
  }
}

export default App;
