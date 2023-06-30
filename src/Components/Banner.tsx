import React from 'react';
import image1 from '../assets/banner.png';
import image2 from '../assets/home page.png';
import image3 from '../assets/Group 1.png';


const Banner: React.FC = () => {
    return (
        <div className="flex items-left justify-between bg-gray-100 py-4 px-6">
            <div className="w-1/2">
                <>
                    <h1 className="text-2xl font-bold text-gray-800" style={{ float: "left", marginLeft: "80px", marginTop: '50px' }} >About the Course</h1>
                    <br /><span /><br /><span /><br /><span />
                    <p className="text-sm font-bold text-gray-800" style={{ marginLeft: "80px", marginTop: '60px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Lorem ipsum dolor sit amet.
                        <br />

                        <img src={image3} alt='image 3' style={{ float: "right", marginRight: "300px" }} />
                        <br />
                        <button className='success'>Sign UP Now</button>

                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '250px' }}>
                            <div className="flex flex-wrap " style={{
                                display: 'flex', flexDirection: 'row', marginLeft: '20px',
                                padding: '20px'
                            }}></div>

                            <div className="w-full sm:w-1/2" style={{ width: '350px' }} >
                                <div className="card"  >
                                    <h3 className="card-title">Card 1 Monthly</h3>
                                    <p className="card-description">Card 1 description for monthly</p>
                                </div>
                            </div>

                            <div className="w-full sm:w-3/4" style={{ width: '350px' }} >
                                <div className="card">
                                    <h3 className="card-title">Card 2 Monthly</h3>
                                    <p className="card-description">Card 2 description for monthly</p>
                                </div>
                            </div>
                        </div>

                      

  <h1 className="text-2xl font-bold text-gray-800" style={{ float: "right", marginRight: "280px", marginTop: '0px' }} >About the Course</h1>
                       <br/>
                     <div style={{ float: "right", marginTop: '10px' }}> 
                       <p className="text-sm font-bold text-gray-800" style={{ marginRight: "300px", marginTop: '0px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                            Lorem ipsum dolor sit amet.
                                    <br/> <br/>
                            <button style={{color:'purple'}}> Explore Now</button>
                        </p>
                        </div>



                        <div style={{ display: 'flex', flexDirection: 'row', marginTop:'-20px'}}>
                            <div className="flex flex-wrap " style={{
                                display: 'flex', flexDirection: 'row', marginLeft: '20px',

                            }}></div>

                            <div className="w-full lg:w-1/4" style={{ width: '450px' }} >
                                <div className="card"  >
                                    <h3 className="card-title">Card 1 Monthly</h3>
                                    <p className="card-description">Card 1 description for monthly</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/4" style={{ width: '450px', paddingLeft:'-50px' }} >
                                <div className="card">
                                    <h3 className="card-title">Card 2 Monthly</h3>
                                    <p className="card-description">Card 2 description for monthly</p>
                                </div>
                            </div>
                        </div>

                    </p>
                </>

            </div>
        </div>

    );
};

export default Banner;