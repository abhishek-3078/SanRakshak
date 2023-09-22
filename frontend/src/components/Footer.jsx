import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="text-center text-lg-start text-white bg-gray-600 py-4">
          <section className="text-white">
            <div className="container mx-auto pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="mb-4">
                  <h6 className="text-xl font-semibold">SanRakshak</h6>
                  <hr className="border-t-2 border-indigo-600 w-20 mt-2 mx-auto" />
                  <p className="mt-4">
                    SanRakshak is a platform that helps users prepare for and respond to emergencies and disasters.
                    It provides real-time alerts, evacuation routes during crises.
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-xl font-semibold">Our Pages</h6>
                  <hr className="border-t-2 border-indigo-600 w-20 mt-2 mx-auto" />
                  <p className="mt-4">
                    <a href="#" className="text-white hover:underline">
                      Dashboard
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white hover:underline">
                      Alerts
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white hover:underline">
                      Partners
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white hover:underline">
                      Statistics
                    </a>
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-xl font-semibold">Useful links</h6>
                  <hr className="border-t-2 border-indigo-600 w-20 mt-2 mx-auto" />
                  <p className="mt-4">
                    <a href="https://www.ndma.gov.in/" className="text-white hover:underline">
                      NDMA
                    </a>
                  </p>
                  <p>
                    <a href="https://www.mha.gov.in/sites/default/files/NPDM-101209.pdf" className="text-white hover:underline">
                      NPDM
                    </a>
                  </p>
                  <p>
                    <a href="https://ndrf.gov.in/" className="text-white hover:underline">
                      NDRF
                    </a>
                  </p>
                  <p>
                    <a href="https://msdma.gov.in/sdrf.html" className="text-white hover:underline">
                      SDRF
                    </a>
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="text-xl font-semibold">Contact Us</h6>
                  <hr className="border-t-2 border-indigo-600 w-20 mt-2 mx-auto" />
                  <p className="mt-4">
                    <i className="fas fa-home mr-3" /> NIT Kurukshetra, Haryana, India
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> SanRakshak_lifematters@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 915 84 51 21
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 915 45 62 32
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Footer;