import { Box } from "@mui/system";
export const DashboardLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "20% 80%",
        gridTemplateRows: "100% 100%",
      }}
    >
      {children}
    </Box>
  );
};
