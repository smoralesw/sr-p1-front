import { useState } from "react";

const PathsInfo = (paths_len, paths) => {
  const [value, setValue] = useState(2);
  const [data_, setData_] = useState([1,2,3,4]);

  return (
    <div>
      {paths_len}
      {paths}
      {/* {paths_len.map((path, index) => (
        <div key={index}>
          <h2>Path {index}</h2>
          <p>{paths[index]}</p>
        </div>
        ))} */}
    </div>
  );
};
  
export default PathsInfo;