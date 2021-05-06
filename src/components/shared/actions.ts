const editAction = (intl, get, action) => {
  return {
    desc: intl.formatMessage({ id: "edit" }),
    onClick: async localItem => {
      const item = (await get(localItem.id)).data;
      action(item);
    }
  };
};

const addAction = (intl, action) => {
  return {
    desc: intl.formatMessage({ id: "add" }),
    onClick: () => action()
  };
};

export { editAction, addAction };
