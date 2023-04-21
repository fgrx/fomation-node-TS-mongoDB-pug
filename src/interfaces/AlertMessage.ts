interface AlertMessage {
  title?: string;
  description: string;
  type: "success" | "error" | "warning";
}

export { AlertMessage };
