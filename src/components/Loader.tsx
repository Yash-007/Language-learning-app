import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', height:'90vh', }}>
      <CircularProgress size={'3rem'} />
    </Box>
      )
}

export default Loader