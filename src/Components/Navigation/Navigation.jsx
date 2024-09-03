'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react"

const Navigation = () => {
  const [tab, setTab] = useState("");
  const path = usePathname();
  const router = useRouter();
  
  useEffect(() => {
      if(path === '/'){
        setTab(path);
        router.push("/")
      }else if(path === '/cryptocurrencies'){
        setTab(path);
        router.push("cryptocurrencies")
      }else if(path === '/exchanges'){
        setTab(path);
        router.push("/exchanges")
      }else if(path === '/news'){
        setTab(path);
        router.push("/news")
      }
      else if(path.split('/')[1] === 'cryptodetails'){
        setTab('/cryptocurrencies');
      }
      window.scrollTo(0,0);
  }, [path])

  return (
    <div className="navigation-sec">
         <div className="row">
          <div className="col-12 brand py-3 text-center d-flex align-item-center justify-content-center">
            <img src="https://www.svgrepo.com/show/331318/bittrex.svg" alt="" className="img-fluid" height={35} width={35}/>
             &nbsp; <span className="h4 m-0 p-0 d-flex align-items-center">KRYPT <span className="text-warning">o</span></span>
          </div>
          <div className="col-11 col-xxl-8 p-0 m-auto menus mt-3 py-3 text-center">
            <div className="row d-flex justify-content-center mx-1">
                <div className="col-5 m-0 p-0 mb-4 text-center">
                  <Link href={"/"} className={'linknav'} > 
                      <div className={tab==='/'? 'manu-tab': 'menu-btn'}>
                        <i aria-hidden="true" className="fa-solid fa-bars"></i>
                      </div>
                      <span className={tab==='/'? 'text-dark': ''}>Dashboard</span>
                  </Link>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <Link href={"cryptocurrencies"} className={'linknav'}>
                      <div className={tab==='/cryptocurrencies'? 'manu-tab': 'menu-btn'}>
                        <i aria-hidden="true" className="fa-solid fa-baht-sign"></i>
                      </div>
                      <span className={tab==='/cryptocurrencies'? 'text-dark': ''}>Currency</span>
                  </Link>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <Link href={"exchanges"} className={'linknav'}>
                      <div className={tab==='/exchanges'? 'manu-tab': 'menu-btn'}>
                      <i aria-hidden="true" className="fa-solid fa-building"></i>
                      </div>
                      <span className={tab==='/exchanges'? 'text-dark': ''}>Exchanges</span>
                  </Link>
                </div>
                <div className="col-5 m-0 p-0 mb-4">
                  <Link href={"news"} className={'linknav'}>
                      <div className={tab==='/news'? 'manu-tab': 'menu-btn'}>
                      <i aria-hidden="true" className="fa-solid fa-lightbulb"></i>
                      </div>
                      <span className={tab==='/news'? 'text-dark': ''}>News</span>
                  </Link>
                </div>
              
              </div>

          </div>
         </div>
    </div>
  )
};

export default Navigation;
