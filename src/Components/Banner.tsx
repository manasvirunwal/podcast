import React from 'react';
import image1 from '../assets/banner.png';
import image2 from '../assets/home page.png';
import image3 from '../assets/Group 1.png';


const Banner: React.FC = () => {
    return (
        <div className="flex items-left justify-between bg-gray-100 py-4 px-6">
            <div className="w-1/2">
                <>
                    <h1 className="text-2xl font-bold text-gray-800" style={{ float: "left", marginLeft: "80px", marginTop:'50px' }} >About the Course</h1>
                    <br /><span /><br /><span /><br /><span />
                    <p className="text-sm font-bold text-gray-800" style={{ marginLeft: "80px", marginTop:'60px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Lorem ipsum dolor sit amet.
                        <br/>
                        <button className='success'>Explore Now</button>
                        <img src={image3} alt='image 3' style={{ float: "right", marginRight: "100px" }} />
                    </p>
                </>


                {/* <img src={image3} alt="Image 1" className="w-full"  /> */}
                {/* <img src={image3} alt="Image 2" className="w-3/4 absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}

            </div>
        </div>

    );
};

export default Banner;