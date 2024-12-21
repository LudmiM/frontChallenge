import { SERVER } from "../../constants";

export const deleteProjectApi = async (id: number) => {
    const apiUrl = SERVER;
    try {
      const response = await fetch(`${apiUrl}/project/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to deleted project');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error delete project:', error);
      throw error;
    }
  };

export default deleteProjectApi;
  