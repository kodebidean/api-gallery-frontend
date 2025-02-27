import { useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ImageGallery from '../components/ImageGallery';

const GalleryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Box sx={{ 
            minHeight: 'calc(100vh - 64px)', 
            backgroundColor: '#0D1117',
            width: '100%',
            py: 4 
        }}>
            <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 3, 
                        mb: 4, 
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
                        Galería de Imágenes
                    </Typography>
                    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                        <SearchBar value={searchTerm} onChange={setSearchTerm} />
                    </Box>
                </Paper>
                <ImageGallery searchTerm={searchTerm} />
            </Container>
        </Box>
    );
};

export default GalleryPage;