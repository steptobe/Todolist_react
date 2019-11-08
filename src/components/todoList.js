import React from 'react'
import AppTodos from './addTodo'

class AppList extends React.Component {
    SubmitDelete(id) {
        this.props.DeleteItem(id)
    }
    ChangeDone(id) {
        this.props.ChangeComplete(id)
    }
    render() {
        var value = this.props.choosevalue;

        const a = this.props.data.map(({ id, text, complete,deleteFlag }, index) => {
            if (value == '1' && deleteFlag !== true) {
                return <AppTodos
                    key={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)} DeleteItem={this.SubmitDelete.bind(this)}
                />
            }

            if (value == '2' && complete === false && deleteFlag !== true) {
                return <AppTodos
                    key={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)} DeleteItem={this.SubmitDelete.bind(this)}
                />
            }

            if (value == '3' && complete === true && deleteFlag !== true) {
                return <AppTodos
                    key={index}
                    id={id}
                    text={text}
                    complete={complete}
                    ChangeCompleteItem={this.ChangeDone.bind(this)} DeleteItem={this.SubmitDelete.bind(this)}
                />
            }
        })

        return (
            <div> {a} </div>
        )
    }
}

export default AppList