import { Categories } from '../../../services';

module.exports = {
    Mutation: {
        create_category: async (_, { name, description }) => {
            const category = new Categories({
                name,
                description
            })
            await category.save();
            return category;
        }
    }
}

