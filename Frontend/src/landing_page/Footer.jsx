import React from 'react';

function Footer() {
    return (
        <footer className="border-top bg-light text-muted py-5 mt-5">
            <div className="container">
                <div className="row mb-5">
                    
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                            <img src="media/Tickr.png" alt="Tickr Logo" style={{ width: "24px" }} className="me-2" />
                            <span style={{ color: "#1E3A5F", fontWeight: "700", fontSize: "1.2rem" }}>Tickr</span>
                        </div>
                        <p className="small mb-3">
                            &copy; 2010 - 2026, Tickr Broking Ltd.<br />All rights reserved.
                        </p>
                        
                        <div className="d-flex gap-3 mb-3 fs-5">
                            <a href="#" className="text-muted"><i className="fab fa-x-twitter"></i></a>
                            <a href="#" className="text-muted"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-muted"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-muted"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="d-flex gap-3 mb-4 fs-5">
                            <a href="#" className="text-muted"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="text-muted"><i className="fab fa-whatsapp"></i></a>
                            <a href="#" className="text-muted"><i className="fab fa-telegram"></i></a>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <a href="#">
                                <img src="media/googlePlayBadge.svg" alt="Google Play" style={{ width: "130px" }} />
                            </a>
                            <a href="#">
                                <img src="media/appstoreBadge.svg" alt="App Store" style={{ width: "130px" }} />
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <p className="fw-bold text-dark mb-3">Account</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li><a href="#" className="text-decoration-none text-muted">Open demat account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Minor demat account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">NRI demat account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">HUF demat account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Commodity</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Dematerialisation</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">MTF</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <p className="fw-bold text-dark mb-3">Support</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li><a href="#" className="text-decoration-none text-muted">Contact us</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Support portal</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">How to file a complaint?</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Status of your complaints</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Bulletin</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Circular</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Downloads</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <p className="fw-bold text-dark mb-3">Company</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li><a href="#" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Philosophy</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Press & media</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Tickr Cares (CSR)</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Tickr.tech</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Open source</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Referral program</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="fw-bold text-dark mb-3">Quick links</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li><a href="#" className="text-decoration-none text-muted">Upcoming IPOs</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Brokerage charges</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Market holidays</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Economic calendar</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Calculators</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Markets</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Sectors</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Gift Nifty</a></li>
                        </ul>
                    </div>

                </div>

                <div className="small text-muted" style={{ fontSize: "11px", lineHeight: "1.6" }}>
                    <p className="mb-3">
                        Tickr Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Tickr Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Tickr Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@tickr.com" className="text-decoration-none">complaints@tickr.com</a>, for DP related to <a href="mailto:dp@tickr.com" className="text-decoration-none">dp@tickr.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>
                    <p className="mb-3">
                        Procedure to file a complaint on <a href="#" className="text-decoration-none">SEBI SCORES/SMARTODR</a>: Register on SCORES portal & SMARTODR. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances.
                    </p>
                    <p className="mb-3">
                        <a href="#" className="text-decoration-none me-3">Smart Online Dispute Resolution</a> 
                        <a href="#" className="text-decoration-none">Grievances Redressal Mechanism</a>
                    </p>
                    <p className="mb-3">
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p className="mb-3">
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p className="mb-3">
                        India's largest broker based on networth as per NSE. <a href="#" className="text-decoration-none">NSE broker factsheet</a>.
                    </p>
                    <p className="mb-3">
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Tickr and offering such services, please <a href="#" className="text-decoration-none">create a ticket here</a>.
                    </p>
                    <p className="mb-3">
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited) | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>
                    <p className="mb-4">
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Tickr Broking Limited (SEBI Regn No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-4 pt-3 border-top text-center">
                        <a href="#" className="text-decoration-none text-muted">NSE</a>
                        <a href="#" className="text-decoration-none text-muted">BSE</a>
                        <a href="#" className="text-decoration-none text-muted">MCX</a>
                        <a href="#" className="text-decoration-none text-muted">MSEI</a>
                        <a href="#" className="text-decoration-none text-muted">Terms & conditions</a>
                        <a href="#" className="text-decoration-none text-muted">Policies & procedures</a>
                        <a href="#" className="text-decoration-none text-muted">Privacy policy</a>
                        <a href="#" className="text-decoration-none text-muted">Disclosure</a>
                        <a href="#" className="text-decoration-none text-muted">For investor's attention</a>
                        <a href="#" className="text-decoration-none text-muted">Investor charter</a>
                        <a href="#" className="text-decoration-none text-muted">Sitemap</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;