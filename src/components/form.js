import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/action';

class Form extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        // this.state = {
        //     input: '',
        // };
    };

    focusTextInput = (e) => {
        e.preventDefault();
        this.textInput.current.focus();
    }

    // updatInput = (e) => {
    //     this.setState({
    //         input: e.target.value,
    //     });
    // };

    // handleAddTodo = (e) => {
    //     e.preventDefault();
    //     console.log(this.props);
    //     this.setState({
    //         input: '',
    //     });
    // }

    render() {
        return (
            <form onSubmit={this.focusTextInput}>
                <input ref={this.textInput} type='text'></input>
                <button type='submit'>Add</button>
            </form>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state, props);
    return;
};

export default connect(
    // null,
    mapStateToProps,
    { addTodo },
)(Form);