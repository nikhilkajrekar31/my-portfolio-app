import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';

class Resume extends Component{
  render(){
    return(
      <div style = {{width:'100%', height: '100%' , margin:'auto'}} className="resume-grid">
        <Grid className='resume-col'>
          <Cell col = {12} >
            <h2>EDUCATION</h2>
            <hr/>
            <table style={{width:'100%'}} className='education-table'>
            <tr>
              <td><span>Master of Science, Computer Science</span> | University of Texas at Arlington, Texas | GPA: 3.75/4.0</td>
              <td>[May 2019]</td>
            </tr>
            <tr>
              <td><span>Bachelor of Engineering, Computer Engineering</span> | University of Mumbai, India | GPA: 7.43/10.0</td>
              <td>[May 2016]</td>
            </tr>
            </table>
            <h2>COURSES</h2>
            <hr/>
            <table className="courses-table" style={{width:'100%'}}>
            <tr>
              <td>2017 FALL</td>
              <td>DSGN & ANLY ALGORITHMS</td>
              <td>SOFTWARE TESTING</td>
              <td>ARTIFICIAL INTELLIGENCE I</td>
            </tr>
            <tr>
              <td>2018 SPRING</td>
              <td>DISTRIBUTED SYSTEMS</td>
              <td>DATA MINING</td>
              <td>WEB DATA MANAGEMENT</td>
            </tr>
            <tr>
              <td>2018 SUMMER</td>
              <td>DATABASE SYSTEMS</td>
              <td>ADV TOPICS IN DATABASE SYSTEMS</td>
            </tr>
            <tr>
              <td>2018 FALL</td>
              <td>SFWR ENG I ANLY, DSGN, TESTING</td>
              <td>SECURE PROGRAMMING</td>
              <td>SPEC TOPS ADV SFTWR ENGR</td>
            </tr>
            <tr>
              <td>2019 SPRING</td>
              <td>PYTHON PROGRAMMING</td>
            </tr>
            </table>
            <h2>SKILLS & TECHNOLOGIES</h2>
            <hr/>
            <table className="skills-table" style={{width:'100%'}}>
            <tr>
              <td>Programming Languages</td>
              <td>Python, Java, SQL, C#, .Net, MATLAB</td>
            </tr>
            <tr>
              <td>AWS Services</td>
              <td>EC2, S3, EBS, RDS, Redis, Elastic Load Balancer, Auto Scaling, Memcache</td>
            </tr>
            <tr>
              <td>Tools & IDE's</td>
              <td>GitHub, JMeter, PyCharm, SublimeText, Spyder, Atom, Eclipse, Microsoft Visual Studio, Wireshark, Adobe Photoshop, Google Adwords, Buffer, Microsoft Office</td>
            </tr>
            <tr>
              <td>Web Technologies</td>
              <td>HTML, CSS, JavaScript, XML, PHP, React, Chrome Dev Tools, Java Servlets, CodeIgniter MVC, Bootstrap, Wordpress, Flask API</td>
            </tr>
            <tr>
              <td>Testing Tools</td>
              <td>JUnit, JaCoCo, PIT Mutation Testing, EasyMock, Selenium IDE, Selenium WebDriver, FireBug, XPath</td>
            </tr>
            <tr>
              <td>Database Technologies</td>
              <td>MySql, MariaDB, SQLite, Microsoft SQL Server, MySql Workbench</td>
            </tr>
            <tr>
              <td>Cloud Services</td>
              <td>Azure Web Apps, IBM Bluemix, Amazon AWS</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>Microsoft Windows, Linux</td>
            </tr>
            </table>
            <h2>PROJECTS</h2>
            <hr/>
	            <p><span>My Porfolio Web Application [React, React Router v4, React MDL, CSS]:</span></p>
	            <p>Developed a website showcasing my hobby, places I have visited, my resume, about me and my contact.</p>
	            <p><span>Application Level Virus Attacks and Traps [WinRAR]:</span></p>
	            <p>The project demonstrated application bomber, folder flooder, user account flooder, shutdown virus, fork bomb, extension changer and various measures to prevent the system from these attacks.</p>
	            <p><span>Pacific Trails Resort Web Application [PHP, CodeIgniter MVC, JavaScript, HTML, CSS, MariaDB, XAMPP]:</span></p>
	            <p>Created a website where one can make reservations for different activities provided by the pacific trails resort included in different packages and also shop from their available shopping resources.</p>
	            <p><span>Car Rental Web Application for University [JSP, Java Servlets, Apache Tomcat, MySQL, MVC Architecture]:</span></p>
	            <p> Developed a web application for the university car rental system using Java JSP technology while strictly following MVC application development architecture. The application was heavily tested using Junit, JaCoCo and Selenium.</p>
	            <p><span>Online Betting Portal [XAMPP server, Microsoft SQL, HTML, CSS, JavaScript, PHP.]:</span></p>
	            <p>Developed a web application which allows registered users to bet on ongoing matches of various sports and according to the results of those matches the transactions are automatically reflected in the accounts of the registered user.</p>
	            <p><span>Earthquake Data Visualization [AWS ELB, AWS Auto Scaling, JMeter, Python Flask, Google Charts JS]:</span></p>
	            <p>Analyzed earthquake data using K Means Clustering & Visualized based on latitude, longitude and magnitude.</p>
	            <p><span>Connect4 Game Using Binary Search Tree and MiniMax Algorithm [Python]:</span></p>
	            <p>Built a Python program that implements an agent which plays the Connect4 game using search and MiniMax algorithm.</p>
	            <p><span>LAN Chat Application with 2PC and 3PC Commit Protocols [Visual Basic .NET]:</span></p>
	            <p>Developed a Client and Server for LAN Chat Application with Multi-Threading Support and multiple client support, 2 Phase Commit Protocol and 3 Phase Commit Protocol for committing changes on a file shared on the LAN chat program.</p>
	            <p><span>Changes in Currency Web Application [PHP, CodeIgniter MVC, JavaScript, HTML, CSS, Bootstrap, MariaDB, XAMPP]:</span></p>
	            <p>Developed a website for tracking prices of products in a constantly changing currency market with real time tips for customers to determine the best time to shop products online and also allow user to convert currency as per the current currency rate and country.</p>
	            <p><span>Data Mining Classification and Modelling [Python, Spyder IDE]:</span></p>
	            <p> Developed a function in python to classify and model data using Centroid Classification Algorithm, K-Nearest Neighbor Classification Algorithm, Linear Regression Algorithm and Support Vector Machines. Developed a function to extract Eigen Values, Eigen Vectors and Covariance Matrix using ATNT_FaceImages400, HandWrittenLetters Data and IRIS Dataset.</p>
	            <h2>WORK EXPERIENCE</h2>
            <hr/>
            <p><span>VMA Global Solutions LLP:</span></p>
            <table className="work-ex-table" style={{width:'100%'}}>
            <tr>
              <td><span>Online Marketing Associate</span> [SEO, Google Analytics, Google AdWords, WordPress, HTML, CSS, Plugin Scripting]</td>
              <td><span>[Sept 2016 – July 2017]</span></td>
            </tr>
            </table>
            <p>Feedspot.com is a product from VMA Global Solutions LLP. My main responsibilities were the following: SEO (On-page optimization, Google Analytics, Keyword Ranking Tools), modification and updating of Feedspot.com according to SEO rules and regulations using HTML, CSS and WordPress plugins, content creation and publication on WordPress.</p>
          </Cell>
          <Button className='download-button' raised accent>DOWNLOAD</Button>
        </Grid>
      </div>
    )
  }
}

export default Resume;
