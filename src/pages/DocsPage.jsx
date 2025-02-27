import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import PropTypes from 'prop-types';

const EndpointDocs = ({ method, endpoint, description, params, response }) => (
    <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography
                component="span"
                sx={{
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: method === 'GET' ? '#238636' :
                                   method === 'POST' ? '#1F6FEB' :
                                   method === 'DELETE' ? '#DA3633' : '#30363D',
                    color: '#fff',
                    fontFamily: 'monospace',
                    mr: 2
                }}
            >
                {method}
            </Typography>
            <Typography
                component="span"
                sx={{
                    fontFamily: 'monospace',
                    backgroundColor: '#30363D',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    color: '#E6EDF3'
                }}
            >
                {endpoint}
            </Typography>
        </Box>
        <Typography sx={{ mb: 2 }}>{description}</Typography>
        
        {params && (
            <>
                <Typography variant="h6" sx={{ mb: 1 }}>Parámetros</Typography>
                <Paper sx={{ p: 2, mb: 2, backgroundColor: '#30363D' }}>
                    <pre style={{ margin: 0, color: '#E6EDF3' }}>
                        {JSON.stringify(params, null, 2)}
                    </pre>
                </Paper>
            </>
        )}
        
        <Typography variant="h6" sx={{ mb: 1 }}>Respuesta</Typography>
        <Paper sx={{ p: 2, backgroundColor: '#30363D' }}>
            <pre style={{ margin: 0, color: '#E6EDF3' }}>
                {JSON.stringify(response, null, 2)}
            </pre>
        </Paper>
    </Box>
);

EndpointDocs.propTypes = {
    method: PropTypes.string.isRequired,
    endpoint: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    params: PropTypes.object,
    response: PropTypes.object.isRequired
};

const DocsPage = () => {
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
                        p: 4,
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
                            mb: 3
                        }}
                    >
                        Documentación de la API
                    </Typography>

                    <Typography sx={{ mb: 4 }}>
                        Esta API permite gestionar una galería de imágenes. Todos los endpoints están bajo la URL base: 
                        <code style={{ backgroundColor: '#30363D', padding: '2px 6px', borderRadius: 4 }}>
                            http://localhost:9090/api
                        </code>
                    </Typography>

                    <Divider sx={{ mb: 4 }} />

                    <EndpointDocs
                        method="GET"
                        endpoint="/images"
                        description="Obtiene todas las imágenes de la galería."
                        response={{
                            "images": [
                                {
                                    "id": 1,
                                    "name": "ejemplo.jpg",
                                    "url": "http://localhost:9090/images/ejemplo.jpg",
                                    "description": "Descripción de la imagen",
                                    "createdAt": "2024-03-20T15:30:00Z"
                                }
                            ]
                        }}
                    />

                    <EndpointDocs
                        method="POST"
                        endpoint="/images"
                        description="Sube una nueva imagen a la galería."
                        params={{
                            "file": "Archivo de imagen (multipart/form-data)",
                            "description": "Descripción de la imagen (opcional)"
                        }}
                        response={{
                            "id": 1,
                            "name": "ejemplo.jpg",
                            "url": "http://localhost:9090/images/ejemplo.jpg",
                            "description": "Descripción de la imagen",
                            "createdAt": "2024-03-20T15:30:00Z"
                        }}
                    />

                    <EndpointDocs
                        method="DELETE"
                        endpoint="/images/{id}"
                        description="Elimina una imagen de la galería."
                        params={{
                            "id": "ID de la imagen a eliminar"
                        }}
                        response={{
                            "message": "Imagen eliminada correctamente"
                        }}
                    />

                    <EndpointDocs
                        method="GET"
                        endpoint="/images/search"
                        description="Busca imágenes por nombre."
                        params={{
                            "name": "Término de búsqueda"
                        }}
                        response={{
                            "images": [
                                {
                                    "id": 1,
                                    "name": "ejemplo.jpg",
                                    "url": "http://localhost:9090/images/ejemplo.jpg",
                                    "description": "Descripción de la imagen",
                                    "createdAt": "2024-03-20T15:30:00Z"
                                }
                            ]
                        }}
                    />
                </Paper>
            </Container>
        </Box>
    );
};

export default DocsPage; 