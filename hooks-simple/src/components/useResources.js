import { useState, useEffect }from 'react';
import axios from 'axios';


// this function has no tie to any specific one component.  Can be used almost anywhere you want to
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // we have an arrow function that immediately defines an arrow function
  useEffect(() => {
    ( async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource)
  }, [resource]);

  return resources;
};

export default useResources;
