import React, { useState } from 'react';
import ResourceList from "./ResourceList";
import UserList from './UserList';

// using a functional component that uses a useState hook
const App = () => {
  // This is a hook; using array destructuring.  when are returning array with the useState inside of it and
  // then we assign 'resource' to the first element of the array and 'setResource' to the
  // second element of the array.  setResource is equivalent to this.setState.  when the app renders itself
  // it assign th re-rendered data to 'resource'
  const [resource, setResource] = useState('posts');

  return (
      <div>
        <UserList/>
         <div>
             <button onClick={() => setResource('posts')}>Posts</button>
             <button onClick={() => setResource('todos')}>Todos</button>
         </div>
          <ResourceList resource={resource}/>
      </div>
  );
};

export default App;
