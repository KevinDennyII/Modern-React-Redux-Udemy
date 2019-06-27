import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    /* components are the exception to the JSX rules in using curl braces */
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Captain America"
                    timeAgo="Today at 4:45PM"
                    comment="Shut up, Ironman!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Black Panther"
                    timeAgo="Today at 2:00AM"
                    comment="Shut up, Ironman!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Mighty Mouse"
                    timeAgo="Today at 9:09PM"
                    comment="Shut up, Ironman!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
