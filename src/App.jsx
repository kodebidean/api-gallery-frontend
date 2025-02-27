import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { darkTheme } from './theme/darkTheme';
import Navbar from './components/Navbar';
import GalleryPage from './pages/GalleryPage';
import UploadPage from './pages/UploadPage';
import DocsPage from './pages/DocsPage';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <Box sx={{ 
                        minHeight: '100vh',
                        backgroundColor: '#0D1117'
                    }}>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<GalleryPage />} />
                            <Route path="/upload" element={<UploadPage />} />
                            <Route path="/docs" element={<DocsPage />} />
                        </Routes>
                    </Box>
                </BrowserRouter>
                <Toaster 
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: '#21262D',
                            color: '#E6EDF3',
                            border: '1px solid #30363D',
                        },
                    }}
                />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;