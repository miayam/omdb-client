import { h } from 'preact';
import {
    useState,
    useRef,
    useEffect
} from 'preact/hooks';
import {
    forwardRef,
    cloneElement,
    Fragment,
    findDOMNode,
    createPortal
} from 'preact/compat'; // Similar to react-dom

import './index.scss';

const ForwardRefComponent = forwardRef((props, ref) => {
  const {children} = props;
  return cloneElement(children, {ref: ref});
});

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {trigger, children} = props;
    const triggerRef = useRef(null);
    const modalRef = useRef(null);

    const onClose = () => {
        setIsOpen(false);
    }

    const onOpen = () => {
        setIsOpen(true);
    }

    useEffect(() => {
        if (isOpen) {
            // Focus modal element after it's opened
            findDOMNode(modalRef.current).focus();
        } else {
            // Focus trigger element after modal closed
            findDOMNode(triggerRef.current).focus();
        }

    }, [isOpen]);

    const onKeyDown = (event) => {
        if (event.keyCode === 27) {
            onClose();
        }
    }

    const onClickOutsideModal = (event) => {
        const modalNode = findDOMNode(modalRef.current);
        // Make sure we don't close Modal component if we click area within modal.
        if (modalNode && modalNode.contains(event.target)) {
            return;
        }

        onClose();
    }

    return (
        <Fragment>
            <ForwardRefComponent ref={triggerRef}>
                {trigger({
                        onClick: onOpen,
                        onKeyDown: onKeyDown
                })}
            </ForwardRefComponent>
            {isOpen && createPortal(
                <aside
                    aria-modal="true"
                    aria-label="Product display"
                    role="dialog"
                    tabIndex="-1"
                    class="mModal"
                    onClick={onClickOutsideModal}
                    onKeyDown={onKeyDown}
                >
                   <div class="mModal__content">
                        <span
                            role="presentation"
                            onClick={onClose}
                            class="mModal__close"
                        >
                            &times;
                        </span>
                        <ForwardRefComponent ref={modalRef}>
                            {children}
                        </ForwardRefComponent>
                    </div>
                </aside>,
                document.body
            )}
        </Fragment>
    );
}

export default Modal;