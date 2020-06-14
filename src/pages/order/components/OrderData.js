import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../../components/form/Form';
import { Box } from '@material-ui/core';

function OrderData(props) {
  const { openPayment, customer, inputs } = props;
  const [isPaymentModalOpen, togglePaymentModal] = useState(false);

  return (
    <Box maxWidth={500}>
      {/*<Modal open={isPaymentModalOpen}>*/}
      {/*  Modal content*/}
      {/*</Modal>*/}
      <Form
        title='Uzupełnij dane do zamówienia'
        onSubmit={openPayment}
        submitButtonText='Zapłać'
        isMakingRequest={false}
        inputs={inputs}
      />
    </Box>
  );
}

OrderData.propTypes = {
  customer: PropTypes.object,
  openPayment: PropTypes.func,
  inputs: PropTypes.object,
};

export default OrderData;