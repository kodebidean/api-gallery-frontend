import { Box, Container, Typography, Paper } from '@mui/material';
import UploadForm from '../components/UploadForm';

const UploadPage = () => {
    return (
        <Box sx={{ 
            mx: 'auto',
            mt: 4,
            minHeight: 'calc(100vh - 64px)', 
            backgroundColor: '#0D1117',
            width: '50%',
            py: 4 
        }}>
            <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 3,
                        backgroundColor: '#21262D',
                        borderRadius: 2,
                        border: '1px solid #30363D'
                    }}
                >
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        sx={{ 
                            color: '#E6EDF3',
                            textAlign: 'center',
                            mb: 3
                        }}
                    >
                        Subir Nueva Imagen
                    </Typography>
                    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                        <UploadForm />
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default UploadPage;