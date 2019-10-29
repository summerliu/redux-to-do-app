import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         input: '',
    //     };
    // };

    render() {
        return (
            <div>TodoList</div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return;
};

export default connect(
    // null,
    mapStateToProps,
)(TodoList);