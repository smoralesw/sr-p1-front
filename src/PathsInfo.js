import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { ArrowDown } from 'css.gg';
import { Heart } from 'css.gg';

const PathsInfo = ({paths_len, paths}) => {
  const [pathIndex, setPath] = useState(0);

  const handlePath = async (index) => {
    setPath(index);
  }

  const handleAdd = async (id) => {
    try {
      const resp = await Axios.get(`http://localhost:8000/addTrackSpotify/${id}`)
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="paths-section">
      <h2>Select Your Prefered Path Length</h2>
      <Table className='pathsInfoTable' striped bordered hover variant="dark">
        <thead>
          <tr>
            {paths_len.map((path, index) => (
                <th key={index} onClick={() => handlePath(index)}>
                  <div className='table-header'>
                    {path}
                    {(() => {
                      if (pathIndex === index) {
                        return <ArrowDown/>
                      }
                      return <> </>;
                    })()} 
                  </div>
                </th>
            ))}
          </tr>
        </thead>
      </Table>
      <Table className='pathsInfoTable' striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Path</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {paths[pathIndex].map((track, index_) => (
                <tr key={index_}>
                  <td id="reducedFont">{index_ + 1}</td>
                  <td id="reducedFont">{track[0]}</td>
                <td><button className="add-button2" onClick={() => handleAdd(track[1]) }>{<Heart />}</button></td>
                {/* <td><button className="add-button" onClick={() => handleAdd(track[1]) }>+</button></td> */}
              </tr>
              ))}
        </tbody>
      </Table>
    </div>
    );
};
  
export default PathsInfo;