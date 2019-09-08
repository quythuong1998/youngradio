// import { combineResolvers } from 'graphql-resolvers';
import { SystemUser } from '../../../services';

module.exports = {
  Query: {
    get_system_users: async () => {
      const sysUser = await SystemUser.find({});
      console.log(sysUser);
      return sysUser[0];
    }
  }
};
