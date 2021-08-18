import React, { useState } from 'react'
import './RightBody.css'
import data from './dataTable.json';
function RightBody() {
    const [constacts, setContacts] = useState(data);
    return (
        
        <div className="rightbody">
            <div className="rightbody_head">
                <div className="rightbody_head_text">
                <h3>Add Another Keyword</h3>
                <div className="text">1/3</div>
                <h3>UPGRADE</h3>
                </div>
                <h4>Advance search</h4>
            </div>
            <div className="rightbody_input">
<img src="https://cdn4.iconfinder.com/data/icons/materia-tools-vol-1/24/023_042_023_zoom_search_lense_tool-512.png" />
                <input type="text" placeholder="Enter your filters here" />
                <button>SAVE FILTERS</button>
            </div>
            <div className="table_up">
                <h3>The terms you are tracking</h3>
                <h4>The data will refresh every 5 min</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Keywords</th>
                        <th>Goal</th>
                        <th>Matches</th>
                        <th>Search Status</th>
                        <th>Delete Keyword</th>
                    </tr>
                </thead>
                
                <tbody>
                    {constacts.map((contact) => (
                        <tr>
                            <td>{contact.keyword}</td>
                            <td><img src="https://cdn4.iconfinder.com/data/icons/materia-tools-vol-1/24/023_042_023_zoom_search_lense_tool-512.png" /></td>
                            <td>{contact.goal}</td>
                            <td>{contact.matches}</td>
                            <td>{contact.search_status}</td>
                            <td><img src="https://icons.veryicon.com/png/o/construction-tools/coca-design/delete-189.png" /></td>
                        </tr>
                       
                    )
                   
                    )}

                </tbody>
            </table>
            <button className="bt">VIEW RESULTS</button>
        </div>
    )
}

export default RightBody
