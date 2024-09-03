/* eslint-disable @next/next/no-img-element */
import Loading from '@/src/app/loading';
import React, { Suspense } from 'react'
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
const CommonLayout = ({children}) => {
  return (
    <div className="container-fluid m-0 p-0">
          <div className="flex-container">
            <div className="flex-item item1 navigation">
              <Navigation/>
            </div>
            <div className="flex-item item2 content">
              <Suspense fallback={<Loading />}>
                {children}
              </Suspense>
            </div>
          </div>
          <div className="footer-section text-center">
            <Footer/>
          </div>
       </div>
  )
}

export default CommonLayout;
