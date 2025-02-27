import PropTypes from 'prop-types';
import { 
    Dialog, 
    DialogContent, 
    DialogTitle, 
    IconButton, 
    Typography,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({ open, onClose, image }) => {
    if (!image) return null;

    return (
        <Dialog 
            open={open} 
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{image.name}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                        src={image.url}
                        alt={image.name}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '30vh',
                            objectFit:""
                        }}
                    />
                    {image.description && (
                        <Typography 
                            variant="body1" 
                            sx={{ mt: 2 }}
                        >
                            {image.description}
                        </Typography>
                    )}
                    <Typography 
                        variant="caption" 
                        display="block" 
                        sx={{ mt: 1 }}
                    >
                        Subida el: {new Date(image.createdAt).toLocaleDateString()}
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

ImageModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string,
        createdAt: PropTypes.string.isRequired
    })
};

export default ImageModal; 