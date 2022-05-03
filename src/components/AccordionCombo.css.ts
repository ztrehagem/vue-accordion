import { style } from "@vanilla-extract/css";

export const root = style({
  fontSize: "inherit",
});

export const trigger = style({
  width: "100%",
  appearance: "none",
  border: "none",
  background: "orange",
  padding: 0,
  cursor: "pointer",
});

export const triggerInner = style({
  padding: "12px 16px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const triggerLabel = style({
  textAlign: "left",
});

export const content = style({
  padding: "12px 16px",
  background: "wheat",
});
