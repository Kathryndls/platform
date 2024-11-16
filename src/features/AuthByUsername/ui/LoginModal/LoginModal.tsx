import { Suspense } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Modal} from 'shared/ui/Modal/Modal';
import Loader from "shared/ui/Loader/Loader";
import LoginForm from "../../ui/LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginForm />
        </Suspense>
    </Modal>
);
