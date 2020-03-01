import React from 'react';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

const App = () => {
  return (
    <div className="App">
			<CommentBox />
			<CommentList />
    </div>
  );
}

export default App;
