import React from "react";
class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleAdding = (addEvent) => {
        this.setState({
            title: addEvent.target.value
        })
    }

    handleAddSubmit = () => {
        if (!this.state.title) {
            //undefined
            alert('Typing something dumb ass')
        } else {

            let addtodo = {
                id: Math.floor(Math.random) * 100,//.floor là hàm làm tròn
                title: this.state.title
            }

            this.props.addNewProduct(addtodo)
            this.setState({
                title: ''
            })
        }
    }

    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-to-do">
                    <input type="text" value={title} onChange={(addEvent) => this.handleAdding(addEvent)} />
                    <button type="button" className="add" onClick={() => this.handleAddSubmit()}>Add</button>
                </div>
            </>
        )
    }
}
export default AddToDo