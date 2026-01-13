import { Typography } from "@mui/material";

interface StrongProps {
  children: string;
}

function Strong(props: StrongProps) {
  return (
    <>
      {" "}
      <Typography
        component="span"
        sx={{ fontWeight: "bold" }}
      >
        {props.children}
      </Typography>
    </>
  );
}

export default Strong;
