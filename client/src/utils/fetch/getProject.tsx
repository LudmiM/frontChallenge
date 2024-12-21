import { SERVER } from "../../constants";

export const getProjectApi = async (id: number) => {
    const apiUrl = SERVER;
    try {
      const response = await fetch(`${apiUrl}/project/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to get project');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  };

export default getProjectApi;
  