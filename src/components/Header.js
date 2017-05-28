import React from 'react';

const Header = ({ message }) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    );
};

// Prop Validation.
Header.propTypes = {
    headerMessage: React.PropTypes.string.isRequired
};

export default Header;


