import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function DashSearch() {
    return (
        <div style={{ width: 1000 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                // options={DATA.map(option => option.ATTR)} data to be mapped in
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </div>
    );
}