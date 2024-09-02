'use client'
import Link from "next/link";
import React from "react"

const Footer = () => {
  return (
    <div className="row m-0 p-0 footerdiv">
        <div className="col-md-12 m-0 p-0">
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5>INFO</h5>
                    <ul className="list-unstyled">
                        <li><Link href="/">Formats</Link></li>
                        <li><Link href="/">FAQ</Link></li>
                        <li><Link href="/">Status</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>RESOURCES</h5>
                    <ul className="list-unstyled">
                        <li><Link href="/">Developer API</Link></li>
                        <li><Link href="/">Tools</Link></li>
                        <li><Link href="/">Blog</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>COMPANY</h5>
                    <ul className="list-unstyled">
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/">Terms of Service</Link></li>
                        <li><Link href="/">Privacy</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Subscribe to our email newsletter</h5>
                    <form>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Your email" aria-label="Your email"/>
                            <button className="btn btn-primary" type="submit">SUBSCRIBE</button>
                        </div>
                    </form>
                    <h5 className="mt-4">Follow us</h5>
                    <div className="social-icons">
                        <Link href="/"><i className="fa-brands fa-square-facebook"></i></Link>
                        <Link href="/"><i className="fa-brands fa-square-instagram"></i></Link>
                        <Link href="/"><i className="fa-brands fa-square-x-twitter"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </div>
    </div>
  )
};

export default Footer;
