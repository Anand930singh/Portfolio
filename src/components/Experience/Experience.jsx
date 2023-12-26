import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="expCard">
      <div className="expHead"></div>
        <div className="exp">
          <div className="jobHead">
            <div className="compTitle">
              <div className="jobTitle">SDE Intern (Remote)</div>
              <div className="jobCompany">Code Inbound LLP</div>
            </div>
            <div className="jobTime">June 2023 - December 2023</div>
          </div>
          <div className="jobDesc">
            <ul>
              <li>
                Performed comprehensive software testing and quality assurance
                to ensure product reliability and functionality. Actively
                participated in the development of robust APIs to improve
                application functionality.
              </li>
              <li>
                Enhanced application functionality by utilizing NestJS, a NodeJS
                framework.
              </li>
              <li>
                Optimized data storage and retrieval processes by utilizing
                PostgreSQL as the primary database technology.
              </li>
              <li>
                Worked closely with a cross-functional team to successfully
                develop OpenNMS, promoting collaboration and ensuring project
                success.
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Experience;
