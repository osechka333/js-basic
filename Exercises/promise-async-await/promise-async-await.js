const fakeAjax = async () => {
  if (Math.random() > 0.5) {
    return { status: 200 };
  }

  throw new Error('Server error!');
};
