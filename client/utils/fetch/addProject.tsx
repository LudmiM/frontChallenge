import {ProjectDataForm} from "../../enums/project";
import { SERVER } from "../../src/constants";

export const createProjectApi = async (data: ProjectDataForm) => {
    const apiUrl = SERVER;
    try {
      const response = await fetch(`${apiUrl}/project/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
  
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  };

export default createProjectApi;
  