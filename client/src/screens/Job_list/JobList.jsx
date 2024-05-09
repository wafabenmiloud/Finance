import React from 'react';
import './JobList.css'
import Footer from '../../components/footer/Footer';
import BTTButton from "../../components/BTTButton/BTTButton";
import Navbar from '../../components/navbar/Navbar';
import { Link } from "react-router-dom";


const JobList = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); 
      };
    return (
        
        <>
        <Navbar/>
            <div className="jobList">
                <h1>Job list</h1>
                <table>
                    <tbody>
                        <tr className='joblist_thead'>
                            <th>JOB TITLE</th>
                            <th>CITY</th>
                            <th>POSITION TYPE</th>
                            <th>ADDED</th>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                        <tr>
                            <td><p>Talent-Pool: Support Specialist 80-100%</p></td>
                            <td><p><Link onClick={scrollToTop} to="/loginjob"><b style={{color:'black'}}> Rapperswil</b></Link></p></td>
                            <td><p>Full-time employee</p></td>
                            <td><p>16.08.22</p></td>
                        </tr>
                       
                        
                    </tbody>
                </table>
            </div>      <BTTButton/>

            <Footer/>
        </>
    );
}

export default JobList;
