import React from 'react' 
import "../global.css"

const Employee = (props) => {

    let data=props.empDetails
  return (
    <div className="tableBlock">
        <h1 align="center">STUDENT TABLE</h1>
        <table cellspacing="5px" cellpadding="5px" border="1px solid">
            <tr>
                <th>
                    empID
                </th>
                <th>
                    empName
                </th>
                <th>
                    empSal
                </th>
                <th>
                    empDesignation
                </th>
                <th>
                    empGender
                </th>
                <th>
                    empEducation
                </th>
                <th>
                    empExperience
                </th>
                <th>
                    empImage
                </th>
                <th>
                    empSkills
                </th>
                <th>
                    empCity
                </th>
            </tr>
            {data.map((x)=>{
                return <tr>
                    <td>{x.emp_Id}</td>
                    <td>{x.emp_Name}</td>
                    <td>{x.emp_Sal}</td>
                    <td>{x.emp_Designation}</td>
                    <td>{x.emp_Gender}</td>
                     <td>{x.emp_Education}</td>
                     <td>{x.emp_Experience}</td>
                     <td><img src={x.emp_Image} alt="" /></td>
                     <td>{x.emp_Skills.map((y)=>{
                        return <li>{y}</li>
                     })}</td>
                      <td>{x.emp_City}</td>
                </tr>
            }
            
            )}
        </table>
    </div>
  )
}

export default Employee