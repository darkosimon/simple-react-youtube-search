import React from 'react';

const CommentsList = ({commentList}) => {

    const commentItem = commentList.map((comment) => {
        return (
            <li>{comment}</li>
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {commentItem}
        </ul>
    );

};

export default CommentsList;