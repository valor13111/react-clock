import React from 'react';

import Button from '@material-ui/core/Button';

const panel = (props) => {
    return(
        <div>
            <Button variant="contained" color="secondary" onClick={props.toggleDateFunction}>
                Toggle Date
            </Button>
        </div>
    );
};

export default panel;