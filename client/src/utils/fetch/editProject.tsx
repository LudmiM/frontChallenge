import {ProjectDataForm} from "../../../enums/project";
import { SERVER } from "../../constants";

export const editProjectApi = async (id: number,data: ProjectDataForm) => {
    const apiUrl = SERVER;
    try {
      const response = await fetch(`${apiUrl}/project/${id}`, {
        method: 'PATCH',
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

export default editProjectApi;
  