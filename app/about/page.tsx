"use client";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
      }}>
      {/* About Content */}
      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Typography variant="h3" align="center" gutterBottom>
            About MEGA VOLT
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            Clients come here for one reason: results. For more than fifteen
            years the company has supplied industrial equipment exactly where
            and when it was needed. Thousands of shipments have been completed
            in that time, reaching projects across the United States, Europe,
            and Asia. Each delivery has been backed by clear commitments and
            deadlines that were met, building a reputation founded on
            reliability, technical competence, and the ability to handle complex
            international requirements without slowing projects down. Behind
            that reputation is a practical way of working. The company combines
            global reach with local expertise, pairing deep knowledge of
            international regulations with hands-on logistics experience.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
            This approach allows it to keep projects moving even in challenging
            environments.
          </Typography>
          <Typography
            paragraph
            align="center"
            sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
            Instead of overpromising, the team focuses on solutions that work in
            the real world, giving clients not only the right equipment but also
            the assurance that their schedules and budgets remain on track.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}
