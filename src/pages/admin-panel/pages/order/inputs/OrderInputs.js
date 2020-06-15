const orderInputs = () => {
  return {
    address: {
      type: 'text',
      name: 'address',
      id: 'address',
      label: 'Adres',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Tytuł jest wymagany',
    },
    shipDate: {
      type: 'text',
      name: 'shipDate',
      id: 'shipDate',
      label: 'Data dostawy',
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Data dostawy jest wymagana',
    },

    status: {
      type: 'select',
      name: 'status',
      id: 'status',
      label: 'Status',
      options: [],
      defaultValue: false,
      regexp: /^(?!\s*$).+/,
      helperText: 'Status jest wymagany',
    },
  };
};

export default orderInputs;
