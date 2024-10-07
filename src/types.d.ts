import React from "react";

export interface ButtonConfig {
  type: string;
  label: string;
  onClick: () => void;
}

export interface AlertProps {
  type: string;
  onDismiss?: () => void;
  children: React.ReactNode;
}
