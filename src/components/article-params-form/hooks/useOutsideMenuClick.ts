import { useEffect } from 'react';

type UseOutsideMenuClick = {
	isMenuOpen: boolean;
	onClick: () => void;
	rootRef: React.RefObject<HTMLDivElement>;
};

export const useOutsideMenuClick = ({
	isMenuOpen,
	onClick,
	rootRef,
}: UseOutsideMenuClick) => {
	useEffect(() => {
		if (isMenuOpen) {
			const handleClick = (event: MouseEvent) => {
				const { target } = event;
				if (target instanceof Node && !rootRef.current?.contains(target)) {
					onClick();
				}
			};

			const handleEscape = (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					onClick();
				}
			};

			document.addEventListener('mousedown', handleClick);
			document.addEventListener('keydown', handleEscape);

			return () => {
				document.removeEventListener('mousedown', handleClick);
				document.removeEventListener('keydown', handleEscape);
			};
		}
	}, [isMenuOpen, onClick, rootRef]);
};
