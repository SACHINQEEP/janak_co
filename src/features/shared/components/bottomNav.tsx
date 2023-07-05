import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';

const LabelBottomNavigation = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ display: { xs: 'show', sm: 'none' }, backgroundColor: '#f58634', color: 'white', width: '100%', position: "fixed", bottom: '0', right: '0', zIndex: 999999 }} value={value} onChange={handleChange} >
            <BottomNavigationAction
                label="Home"
                value="Home"
                icon={<HomeIcon sx={{ color: 'white' }} />}
            />
            <BottomNavigationAction
                label="Service"
                value="Service"
                icon={<SettingsIcon sx={{ color: 'white' }} />}
            />
            <BottomNavigationAction
                label="About"
                value="About-us"
                icon={<WorkIcon sx={{ color: 'white' }} />}
            />
            <BottomNavigationAction
                label="Blog"
                value="Blog"
                icon={<BookIcon sx={{ color: 'white' }} />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon sx={{ color: 'white' }} />} />
        </BottomNavigation>
    );
};

export default LabelBottomNavigation;