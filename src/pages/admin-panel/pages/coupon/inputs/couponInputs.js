const couponInputs = () => {
  return {
    code: {
      type: 'text',
      name: 'code',
      id: 'code',
      label: 'Kod kuponu',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Kod kuponu jest wymagany',
    },
    discountMultiplayer: {
      type: 'text',
      name: 'discountMultiplayer',
      id: 'discountMultiplayer',
      label: 'Zniżka (%)',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Zniżka jest wymagana',
    },
    amountLeft: {
      type: 'number',
      name: 'amountLeft',
      id: 'amountLeft',
      label: 'Ilość',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Ilość kuponów jest wymagana',
    },
  };
};

export default couponInputs;
