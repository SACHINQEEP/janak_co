import { extendTheme } from '@mui/joy';

export default extendTheme({
    components: {
        JoyAutocomplete: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--joy-shadow-xs)',
                },
            },
        },
        JoyButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--joy-shadow-xs)',
                },
            },
        },
        JoyInput: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--joy-shadow-xs)',
                },
            },
        },
        JoyTextarea: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--joy-shadow-xs)',
                },
            },
        },
        JoySelect: {
            styleOverrides: {
                root: {
                    boxShadow: 'var(--joy-shadow-xs)',
                },
            },
        },
    },
    fontFamily: {
        display: "'Inter', var(--joy-fontFamily-fallback)",
        body: "'Inter', var(--joy-fontFamily-fallback)",
    },
});