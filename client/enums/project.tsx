export interface ProjectDataForm {
    name: string;
    description: string;
    manager: string;
    assignedTo: string;
    status: string;
  }
  
  export interface ProjectData {
    id: number;
    name: string;
    description: string;
    manager: string;
    assignedTo: string;
    status: string;
    date?: string;
    assignedToImg?: string;
    managerImg?: string;
  }
