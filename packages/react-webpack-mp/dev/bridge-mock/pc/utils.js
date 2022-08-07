exports.returnWrap = (data) => ({
  result: {
    browerIndentifier: 8,
    code: 0,
    data: JSON.stringify(data),
    message: '',
  },
});
