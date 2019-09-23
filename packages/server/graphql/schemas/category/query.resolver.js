import { Categories, Articles } from '../../../services';

module.exports = {
  Query: {
    get_all_category: async () => {
      return Categories.find();
    }
  }
}

