import React, { Component } from 'react';

class AddComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };
    }

    render() {
        return (
            <div className='add-comment'>
                <input type='text'
                    value={this.state.comment}
                    onChange={e => this.onInputTextChange(e)} />
                <br />
                <input type='button' className='' value='Add Comment' onClick={e =>this.onCommentAdd(e, this.state.comment)} />
            </div>
        );
    }

    onInputTextChange(e) {
        let commentTxt = e.target.value;
        this.setState({ comment: commentTxt });
    }

    onCommentAdd(event, txtComment) {
        if (txtComment != '') {
            this.props.onAddComment(txtComment);
            this.setState({ comment: '' }); //reset the state after add comment
        }
    }
}

export default AddComment;