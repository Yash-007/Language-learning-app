import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', height:'90vh', }}>
      <CircularProgress size={'3rem'} />
    </Box>
      )
}

export default Loader