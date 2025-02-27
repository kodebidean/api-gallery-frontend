import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CollectionsIcon from '@mui/icons-material/Collections';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArticleIcon from '@mui/icons-material/Article';

const Navbar = () => {
    const location = useLocation();

    return (
        <AppBar 
            position="sticky" 
            sx={{ 
                backgroundColor: '#21262D',
                borderBottom: '1px solid #30363D'
            }}
            elevation={0}
        >
            <Container maxWidth={false}>
                <Toolbar 
                    disableGutters 
                    sx={{ 
                        height: 64,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: 600,
                            color: '#E6EDF3'
                        }}
                    >
                        GalleryAPI
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            component={Link}
                            to="/"
                            startIcon={<CollectionsIcon />}
                            color={location.pathname === '/' ? 'primary' : 'inherit'}
                            sx={{ 
                                borderRadius: 2,
                                px: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(88, 166, 255, 0.1)'
                                }
                            }}
                        >
                            Galería
                        </Button>
                        <Button
                            component={Link}
                            to="/upload"
                            startIcon={<CloudUploadIcon />}
                            color={location.pathname === '/upload' ? 'primary' : 'inherit'}
                            sx={{ 
                                borderRadius: 2,
                                px: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(88, 166, 255, 0.1)'
                                }
                            }}
                        >
                            Subir Imagen
                        </Button>
                        <Button
                            component={Link}
                            to="/docs"
                            startIcon={<ArticleIcon />}
                            color={location.pathname === '/docs' ? 'primary' : 'inherit'}
                            sx={{ 
                                borderRadius: 2,
                                px: 2,
                                '&:hover': {
                                    backgroundColor: 'rgba(88, 166, 255, 0.1)'
                                }
                            }}
                        >
                            API Docs
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;