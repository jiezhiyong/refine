export const accessControlProvider = {
  can: async ({ resource, action, params }) => {
    if (resource === 'posts' && action === 'edit') {
      return {
        can: false,
        reason: 'Unauthorized',
      };
    }

    return { can: true };
  },
};
