import { render } from "@testing-library/react";
import {ReactNode} from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTest from "shared/config/i18n/i18nForTest";

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            <MemoryRouter>
                {component}
            </MemoryRouter>
        </I18nextProvider>
    )
}