import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteImage } from '../services/imageService';
import ImageModal from './ImageModal';

const ImageCard = ({ image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const deleteImage = useDeleteImage();

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
            deleteImage.mutate(image.id);
        }
    };

    return (
        <>
            <Card sx={{ height: '360px',padding: '10px', width: '280px' , y: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    component="img"
                    height="200"
                    width="200"
                    image={image.url}
                    alt={image.name}
                    sx={{ cursor: 'pointer', objectFit: 'cover' }}
                    onClick={() => setIsModalOpen(true)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="div"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            height: '3em' // Aproximadamente 2 líneas
                        }}
                    >
                        {image.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={handleDelete} color="error" aria-label="Eliminar imagen" sx={{ ml: 'auto' }}> 
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <ImageModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                image={image}
            />
        </>
    );
};

ImageCard.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdAt: PropTypes.string.isRequired
    }).isRequired
};

export default ImageCard; 