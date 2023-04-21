interface AlertMessage {
  title?: string;
  description: string;
  type: "success" | "error" | "warning";
  errors?: string[];
}

export { AlertMessage };
