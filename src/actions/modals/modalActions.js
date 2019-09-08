import { MODAL_OPEN, MODAL_CLOSE } from "../../types/Types";

export const openModal = (modalType, modalProps) => dispatch => {
  dispatch({
    type: MODAL_OPEN,
    payload: { modalType, modalProps }
  });
};

export const closeModal = () => dispatch => {
  dispatch({
    type: MODAL_CLOSE
  });
};
