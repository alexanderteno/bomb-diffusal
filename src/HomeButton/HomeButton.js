import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const HomeButton = () => (
    <Link to="/"><Icon>home</Icon></Link>
)

export default HomeButton;