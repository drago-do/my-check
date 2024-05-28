const thisUserIsAdmin = (userPermissions, idBusiness) => {
  return userPermissions.some(
    (permission) =>
      permission.entity === idBusiness && permission.role === "admin"
  );
};

export { thisUserIsAdmin };
