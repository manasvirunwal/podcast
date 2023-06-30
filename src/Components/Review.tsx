// import React from 'react';

// const Review: React.FC = () => {
// return (
// <section>
// {/* Review content */}
// </section>
// );
// };

// export default Review;

import React from 'react';
import avatar3 from '../assets/avata3.jpg'

const Review: React.FC = () => {
    return (
        <div className="bg-gray-100  py-6 px-4" >
            <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
            <div style={{display:'flex', flexDirection:'row', marginLeft:'20px', padding:'20px'}}>
            <div className="flex items-center mt-4" >
                <img src={avatar3} alt="Customer Avatar" className="w-8 h-8 rounded-full" />
                <p className="ml-2">John Doe <h6>Hi,  I love podcast and the features</h6></p>
               
            </div>
            <div className="flex items-center mt-2">
                <img src={avatar3} alt="Customer Avatar" className="w-8 h-8 rounded-full" />
                <p className="ml-2">Jane Smith       <h6>Hi,  I love podcast and the features</h6></p>
         
            </div>
            <div className="flex items-center mt-2">
                <img src={avatar3} alt="Customer Avatar" className="w-8 h-8 rounded-full" />
                <p className="ml-2">Michael Johnson       <h6>Hi,  I love podcast and the features</h6></p>
         
            </div></div>
        </div>
    );
};

export default Review;