import { ReactNode } from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route: string;
}

export function renderWithRouter(component: ReactNode, options: renderWithRouterOptions) {
    const {
        route,
    } = options;

    return render(
        <MemoryRouter i18n={i18nForTests}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}