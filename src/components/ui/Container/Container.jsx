/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="w-full max-w-7xl mx-auto px-5">
            {children}
        </div>
    );
};

export default Container;