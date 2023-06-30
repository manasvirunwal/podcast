// import React, { useState } from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Banner from './Components/Banner';
// import Cards from './Components/Cards';
// import Podcast from './Components/Podcast';
// import SubscriptionCards from './Components/SubscriptionCards';
// import Review from './Components/Review';

// const App: React.FC = () => {
//     const [subscriptionType, setSubscriptionType] = useState('monthly');

//     const handleSubscriptionTypeChange = (type: string) => {
//         setSubscriptionType(type);
//     };

//     return (

//         <div className="container mx-auto">
//             <header className="py-4">
//                 <Header />
//             </header>
// <br></br>
//             <main className="flex">
//                 <div className="w-3/4 pr-4">
//                     <section className="mb-8">
//                         <Banner />
//                     </section>

//                     <section className="mb-8">
//                         <Cards />
//                     </section>
//                 </div>

//                 <div className="w-1/4">
//                     <section className="mb-8">
//                         <Podcast />
//                     </section>

//                     <section className="mb-8">
//                         <div className="flex justify-between mb-4">
//                             <button
//                                 className={`px-4 py-2 rounded-lg ${subscriptionType === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                                 onClick={() => handleSubscriptionTypeChange('monthly')}
//                             >
//                                 Monthly
//                             </button>
//                             <button
//                                 className={`px-4 py-2 rounded-lg ${subscriptionType === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//                                 onClick={() => handleSubscriptionTypeChange('yearly')}
//                             >
//                                 Yearly
//                             </button>
//                         </div>

//                         <SubscriptionCards subscriptionType={subscriptionType} />
//                     </section>

//                     <section>
//                         <Review />
//                     </section>
//                 </div>
//             </main>

//             <footer className="py-4">
//                 <Footer />
//             </footer>
//         </div>

//     );
// };

// export default App;

import React, { useState } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import CardSection from './Components/Cards';
import SubscriptionCards from './Components/SubscriptionCards';
import ReviewSection from './Components/Review';
import Footer from './Components/Footer';

const App: React.FC = () => {
    const [showMonthlyCards, setShowMonthlyCards] = useState(false);

    const handleMonthlyClick = () => {
        setShowMonthlyCards(true);
    };

    const handleYearlyClick = () => {
        setShowMonthlyCards(false);
    };

    return (
        <div>
            <Header />
            <Banner />
            <br />
            <br />
            <span /><span /><span /><span /><span /><span />
            <br />
            <br />
            <span /><span /><span /><span /><span /><span />    <br />
            <br />
            <span /><span /><span /><span /><span /><span />
            <br />
            <br />
            <span /><span /><span /><span /><span /><span />
            <br />
            <br />
            <div className="container mx-auto"style={{marginLeft:'50px'}}>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-2/3">
                        <div className="w-full lg:w-1/3">
                            <div className="bg-gray-100 py-6 px-4">
                                <h2 className="text-2xl font-semibold text-gray-800" >Right Side Text</h2>
                                <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded"
                                    onClick={handleYearlyClick}  >
                                    Yearly
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-2 rounded"
                                    onClick={handleMonthlyClick}
                                    style={{marginLeft:'20px'}}
                                >
                                    Monthly
                                </button>
                                <br />
                                <div style={{marginTop:'20px'}} >
                                <SubscriptionCards showMonthly={showMonthlyCards}  />
                                </div>
                            </div>

                            <br />
                        </div>

                    </div>
                </div>


            </div>
         <div style={{marginLeft:'50px', display:'flex', flexDirection:'row'}}>
            <ReviewSection /></div>  
            <Footer />
        </div>
    );
};

export default App;
