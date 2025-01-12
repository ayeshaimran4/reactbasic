import React from 'react';
import Header from './Components/Header';
import withUserDetails from './Components/withUserDetails';
const UserHeader = withUserDetails(Header);

const App = () => {
  // // Test case 1: User is logged in
  
    const user = { name: 'John Doe', email: 'john@example.com', address:'new york' };

  // Test case 2: User is not logged in
    //  const user = {};

  return (
    <div className='container'>
      <UserHeader user={user} />
    </div>
  );
};

export default App;
