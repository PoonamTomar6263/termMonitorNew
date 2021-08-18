import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
            
            <img src="https://cdn3.iconfinder.com/data/icons/location-93/101/circle_radar_vision_monitor_scan-512.png"/>
            <h2>Term<span>Monitor</span></h2>
            </div>

            <div className="items">
          <div className="items_special">
          <img src="https://icon-library.com/images/home-icon-white/home-icon-white-11.jpg"/>
            <h2>Add Keywords</h2>
          </div>
            
            </div>
            <div className="items">
            
            <img src="https://www.cwc.edu/media/marketing-files/cwcedu/style-assets/icons/two-people.png"/>
            <h2>Matches</h2>
            </div>
            <div className="items">
           
            <img src="https://static.thenounproject.com/png/1288926-200.png"/>
            <h2>Manage sources</h2>
            </div>
            <div className="items">
            
            <img src="https://static.thenounproject.com/png/1288926-200.png"/>
            <h2>Integration</h2>
            </div>
            <div className="items">
            
            <img src="https://static.thenounproject.com/png/1288926-200.png"/>
            <h2>Alerts</h2>
            </div>
            <div className="items">
            
            <img src="http://simpleicon.com/wp-content/uploads/star.png"/>
            <h2>Setting</h2>
            <img className="toggleImage" src="http://www.i2symbol.com/images/symbols/triangle/black_down_pointing_small_triangle_u25BE_icon_256x256.png" />
            </div>
            <div className="items">
             
            <h2>Billings</h2>
            </div>
        </div>
    )
}

export default Sidebar
