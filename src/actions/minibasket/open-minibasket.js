export const OPEN_MINIBASKET = 'OPEN_MINIBASKET';

export const openMinibasket = (isOpen) => ({
    type: OPEN_MINIBASKET,
    payload: isOpen
});