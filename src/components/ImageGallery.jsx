import PropTypes from 'prop-types';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useImages } from '../services/imageService';
import ImageCard from './ImageCard';

const ImageGallery = ({ searchTerm }) => {
    const { data: images, isLoading, error } = useImages();

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <Typography color="error">Error al cargar las imágenes: {error.message}</Typography>
            </Box>
        );
    }

    const filteredImages = images?.filter(image => 
        image.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    ) || [];

    if (filteredImages.length === 0) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <Typography variant="h6" color="text.secondary">
                    No se encontraron imágenes
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            width: '100%',
            p: 2
        }}>
            {filteredImages.map((image) => (
                <Box 
                    key={image.id}
                    sx={{
                        flexGrow: 1,
                        flexBasis: {
                            xs: '100%',
                            sm: 'calc(50% - 24px)',
                            md: 'calc(33.333% - 24px)',
                            lg: 'calc(25% - 24px)'
                        }
                    }}
                >
                    <ImageCard image={image} />
                </Box>
            ))}
        </Box>
    );
};

ImageGallery.propTypes = {
    searchTerm: PropTypes.string
};

export default ImageGallery; 