import React from "react";
import webIMG1 from "../assets/techbdcourses.png";
import webIMG2 from "../assets/techbd-details.png";
import webIMG3 from "../assets/techbdblog.png";

const Details3 = () => {
  return (
    <>
      <input type="checkbox" id="details3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-slate-200">
          <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
                  Project techBD
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                  The technology uses in this project: React JS, Tailwind CSS,
                  Daisy UI, React Icons, Sweet alert, React AOS, React pdf,
                  Firebase, API, Express JS, etc.
                </p>
              </div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    Courses section
                  </h3>
                  <p className="mt-3 text-lg dark:text-gray-400">
                    Our plannet depended on the technology. Every section of our
                    life somehow connected with technology. The way we can
                    become the heart of the tech by learning them strongly!
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
                          Sidebar
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          The sidebar has the categories of the courses. each
                          courese has a log details.
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
                          Clickable button
                        </h4>
                        <p className="mt-2 dark:text-gray-400">
                          The buttons are Clickable. After ckick the button
                          redirected to the details page.
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
                      Eam nibh gloriatur ex
                    </h3>
                    <p className="mt-3 text-lg dark:text-gray-400">
                      Per odio fabellas consulatu cu. Utroque detracto mel ea,
                      quo te latine theophrastus. Ea his tale nibh dissentias,
                      mei exerci tamquam euripidis cu.
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
                            Details page
                          </h4>
                          <p className="mt-2 dark:text-gray-400">
                            Here is Contains all the details about the course
                            which will be clicked.
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
                            Detail with pdf
                          </h4>
                          <p className="mt-2 dark:text-gray-400">
                            A user can download the course details as pdf file
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
            <img src={webIMG3} alt="" />
          </section>
          <div className="modal-action">
            <label htmlFor="details3" className="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details3;
