import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { ArrowDown } from 'css.gg'

const PathsInfo = ({paths_len, paths}) => {
  const [pathIndex, setPath] = useState(0);

  const handlePath = async (index) => {
    setPath(index);
  }

  return (
    <div className="paths-section">
      <h2>Select Your Prefered Path Length</h2>
      <Table className='pathsInfoTable' striped bordered hover variant="dark">
        <thead>
          <tr>
            {paths_len.map((path, index) => (
                <th className="table-header" key={index} onClick={() => handlePath(index)}>
                  {path}
                  {(() => {
                    if (pathIndex === index) {
                      return <ArrowDown/>
                    }
                    return <> </>;
                  })()} 
                </th>
            ))}
          </tr>
        </thead>
      </Table>
      <Table className='pathsInfoTable' striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Length</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Path {pathIndex}</td>
            <td>{paths_len[pathIndex]}</td>
            <td>
              {paths[pathIndex].map((track, index_) => (
                <div key={index_}>
                  <p id="reducedFont">{track}</p>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    );
};
  
export default PathsInfo;