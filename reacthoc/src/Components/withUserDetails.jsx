import React from 'react';

const withUserDetails = (WrappedComponent) => {
  const EnhancedComponent = ({ user, ...props }) => {
    if (!user || Object.keys(user).length === 0) {
      return (
        <div>
          <button>Login</button>
        </div>
      );
    }

    return (
      <nav>
        <WrappedComponent {...props} />
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </div>
      </nav>
    );
  };

  return EnhancedComponent;
};

export default withUserDetails;