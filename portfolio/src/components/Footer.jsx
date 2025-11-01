import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color='white'>
          © {new Date().getFullYear()} A. Karthikeya. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
          <IconButton
            color="primary"
            href="https://github.com/Akudhari12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/karthikeya-akudhari-836bb6394 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 