import React, { ReactNode, FunctionComponent } from 'react';

import { IHeaderProps } from './types';
import {
    useStyletron,
    styled
} from 'baseui';
import { headerRootStyles, HeaderTitle } from './styles';

const HeaderLogo = styled('img', ({ $theme }: any) => {
    return {
        marginRight: '2px',
        height: '100%',
        width: 'auto',
    };
});

const HeaderContainer: FunctionComponent<IHeaderProps> = ({ children, backgroundColor, ...rest }) => {
    const [css]: any = useStyletron();
    let cssClass = css(headerRootStyles({ backgroundColor }));


    return (
        <header data-epo="epo-header" className={cssClass}  {...rest}>
            {children}
        </header>
    );
};

const HeaderSubContainer = styled('div', ({ $theme }: any) => {
    return {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    };
});


const View = (props: IHeaderProps) => {
    const { logo, appName, leftSide, rightSide, backgroundColor, ...rest } = props;
    return (
        <HeaderContainer backgroundColor={backgroundColor} {...rest}>
            <HeaderSubContainer>
                {logo && <HeaderLogo src={logo} />}
                {appName && <HeaderTitle>{appName}</HeaderTitle>}
                {leftSide}
            </HeaderSubContainer>
            <HeaderSubContainer>{rightSide}</HeaderSubContainer>
        </HeaderContainer>
    );
};

export default View;