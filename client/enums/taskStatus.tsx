export enum TaskStatus {
    Enabled = "Enabled",
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed",
  }

  export const TaskStatusOptions = [
    { label: "Pending", value: TaskStatus.Pending },
    { label: "Enabled", value: TaskStatus.Enabled },
    { label: "In Progress", value: TaskStatus.InProgress },
    { label: "Completed", value: TaskStatus.Completed },
];
