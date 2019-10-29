import React from 'react';

import './Header.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const header = () => {
    return (
        <Card className="card">
            <CardContent>
                <Typography className="title" variant="h2">
                    React Clock
                </Typography>
            </CardContent>
        </Card>
    );
};

export default header;