import { styled, StyletronComponent } from 'styletron-react';

export const headerRootStyles = (props: any) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottomWidth: '0.1rem',
        borderBottomStyle: 'solid',
        borderBottomColor: 'var(--epods--color-bluegrey-100)',
        height: 'var(--epods--header-container-height)',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: props.backgroundColor,
        zIndex: 0,
    };
};

export const HeaderTitle: StyletronComponent<any> = styled('h4', {
    marginBottom: '0',
    marginTop: '0',
    fontWeight: 100,
    paddingRight: 'var(--epods--header-menu-margin)',
    fontFamily: 'var(--epods--font-secondary-semibold)',
});

export default {};