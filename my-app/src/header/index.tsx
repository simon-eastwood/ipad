import React from 'react';
import { IHeaderProps } from './types'
import View from './view';


const Header = (props: IHeaderProps) => {
    return <View {...props} />;
};

export default Header;