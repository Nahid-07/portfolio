import React from "react";
import webIMG1 from "../assets/tra1.png";
import webIMG2 from "../assets/a-11-firebase-authantication.web.app_services.png";
import webIMG3 from "../assets/tra3.png";
import webIMG4 from "../assets/addtra.png";

const Details2 = () => {
  return (
    <>
      <input type="checkbox" id="details2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-slate-300">
          <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                  Project Travlog
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                  The technology uses in this project: React JS, Tailwind CSS,
                  Daisy UI, React Icons, Sweet alert, React photo view,
                  Firebase, MongoDB, Express JS, etc.
                </p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    This is our home page
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-400">
                    Here you will see the homepage items. Some section of the
                    page. well organized
                  </p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Section one
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          In this section you see somne category of card.. when
                          you post earlier somthing it show first in the row
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          Section Tow
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          In this section you will see a simple banner
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                          section 4
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          Here is a simple blog section where the top most
                          tourist spots are highlighted
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <img
                    src={webIMG1}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
              <div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="lg:col-start-2">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                      This is the All category section
                    </h3>
                    <p className="mt-3 text-lg dark:text-gray-400"></p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                            Cibo augue offendit has ad
                          </h4>
                          <p className="mt-2 dark:text-gray-400">
                            An per velit appellantur, ut utinam minimum nominavi
                            sit, odio nostro habemus ne nec. Ne sonet regione
                            contentiones est.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                            At eum ferri luptatum lobortis
                          </h4>
                          <p className="mt-2 dark:text-gray-400">
                            Te per quidam maiorum ocurreret, etiam delicatissimi
                            usu ad. Ne has quod periculis. Te sit primis iisque
                            efficiantur.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                            Dicunt verterem evertitur eu sea
                          </h4>
                          <p className="mt-2 dark:text-gray-400">
                            Audire principes rationibus eam an, autem nominavi
                            luptatum per te. Sumo fabulas vim eu, sonet saperet
                            eleifend ut vix.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                    <img
                      src={webIMG2}
                      alt=""
                      className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img className="w-96" src={webIMG3} alt="" />
              <img className="w-96" src={webIMG4} alt="" />
            </div>
          </section>
          <div className="modal-action">
            <label htmlFor="details2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details2;
