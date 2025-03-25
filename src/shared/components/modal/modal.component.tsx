import React, { createRef, FC, HTMLAttributes, memo, ReactNode, useCallback, useEffect, useRef } from "react";
import styles from "./modal.module.css";
import Button from "../button/button.component";


export type ModalVariants = "drawerRight" | "drawerLeft" | "modal";

type Props = HTMLAttributes<HTMLDialogElement> & {
	isOpen: boolean;
	onClose: () => void;
	header?: ReactNode;
	footer?: ReactNode;
	onOpenCallback?: () => void;
	onCloseCallback?: () => void;
	variant?: ModalVariants;
	disableClickOutsideToClose?: boolean;
	removeCloseButton?: boolean;
};

const Modal: FC<Props> = memo((props) => {
	const {
		isOpen,
		onClose,
		header,
		footer,
		children,
		onCloseCallback,
		onOpenCallback,
		variant = "modal",
		disableClickOutsideToClose,
		removeCloseButton,
		...rest
	} = props;

	const modalRef = createRef<any>();

	const openIsTracked = useRef(false);

	const handleOpen = useCallback(() => {
		onOpenCallback?.();

		modalRef?.current?.showModal();
	}, [modalRef, onOpenCallback]);

	const handleClose = useCallback(() => {
		onCloseCallback?.();
		openIsTracked.current = false;
		modalRef?.current?.close();
	}, [modalRef, onCloseCallback]);

	const handleOutsideClick = useCallback(
		(e: MouseEvent) => {
			if (e.target === modalRef?.current) {
				onClose();
			}
		},
		[modalRef, onClose],
	);

	useEffect(() => {
		if (isOpen) {
			handleOpen();
		} else {
			handleClose();
		}
	}, [handleClose, handleOpen, isOpen]);

	useEffect(() => {
		const currentModal = modalRef?.current;
		currentModal?.addEventListener("close", onClose);

		if (!disableClickOutsideToClose) {
			currentModal?.addEventListener("click", handleOutsideClick);
		}

		return () => {
			currentModal?.removeEventListener("close", onClose);
			currentModal?.removeEventListener("click", handleOutsideClick);
		};
	}, [disableClickOutsideToClose, handleOutsideClick, modalRef, onClose]);

	return (
		<dialog className={styles.root} ref={modalRef} {...rest}>
			<div className={styles.content} data-modal-content>
				<div data-modal-header>
					<div>{header}</div>
					{!removeCloseButton && (
						<Button onClick={() => onClose()}>
							x
						</Button>
					)}
				</div>
				<div data-modal-main>{children}</div>
				{footer && <div data-modal-footer>{footer}</div>}
			</div>
		</dialog>
	);
});

Modal.displayName = "Modal";

export default Modal;
