import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';


class ToDoLists extends React.Component {
    state = {
        listToDo: [
            { id: 'td1', title: 'Gawr Gura' },
            { id: 'td2', title: 'Usagi Pekora' },
            { id: 'td3', title: 'Minato Aqua' },
        ],
        editToDo: {}

    }

    addNewProduct = (add) => {
        // let currentList = this.state.listToDo; Cách 1
        // currentList.push(todo); Cách 1

        this.setState({
            listToDo: [...this.state.listToDo, add], //Cách 2
            // listToDo: currentList Cách 1
        })
        toast.success('Thêm thành công nè.')
        toast.error('Cũng là thêm thành công, nhưng là màu red')
        toast.info('vãn là thêm thành công, nhưng là mà xanh,lmao')
    }

    deleteAProduct = (remove) => {
        let currentDelete = this.state.listToDo
        currentDelete = currentDelete.filter(item => item.id !== remove.id)
        this.setState({
            listToDo: currentDelete
        })
        console.log('>>>Check console delete: ', remove)
        toast.success('Xóa thành công nè.')
        toast.error('Cũng là xóa thành công, nhưng là màu red')
        toast.info('vãn là xóa thành công, nhưng là mà xanh,lmao')
    }

    handleEdit = (edit) => {
        let { editToDo, listToDo } = this.state
        let isEmptyObj = Object.keys(editToDo).length === 0//trả về kiểu true||false
        if (isEmptyObj === false && editToDo.id === edit.id) {
            let listToDoCopy = [...listToDo]
            let objIndex = listToDoCopy.findIndex((item => item.id === edit.id))
            listToDoCopy[objIndex].title = editToDo.title
            this.setState({
                listToDo: listToDoCopy,
                editToDo: {}
            })
            toast.success('Sửa thành công nè.')
            return;
        }
        this.setState({
            editToDo: edit
        })
    }

    handleEditOnchange = (event) => {
        let editToDoCopy = { ...this.state.editToDo }
        editToDoCopy.title = event.target.value
        this.setState({
            editToDo: editToDoCopy
        })
    }

    render() {
        let { listToDo, editToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0//trả về kiểu true||false
        return (
            <>
                <p>
                    Đây là bài tập CRUD
                </p>
                <div className="to-do-list-container">
                    <AddToDo addNewProduct={this.addNewProduct} />
                    <div className="to-do-list-content">
                        {listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> No.{index + 1} - Id: {item.id} - Title: {item.title} </span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>No.{index + 1} - Title: <input value={editToDo.title} onChange={(event) => this.handleEditOnchange(event)} /></span>
                                                    :
                                                    <span> No.{index + 1} - Id: {item.id} - Title: {item.title} </span>
                                                }
                                            </>

                                        }
                                        <button className="edit" onClick={() => this.handleEdit(item)}>
                                            {isEmptyObj === false && editToDo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete" onClick={() => this.deleteAProduct(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}
export default ToDoLists