import UserModel from '../../models/User';
import buildUserResponse from '../../utils/BuildUserResponse';

export default function getAllUsersUsecase() {
    async function Execute() {
        // eslint-disable-next-line no-return-await
        return await UserModel.find({}, (error, users) => {
            if (users.length > 0 && users) {
                return users.map((user) => {
                    return buildUserResponse(user);
                });
            }
            return { message: 'No user found' };
        }).catch((error) => {
            console.log(error);
            return {
                error
            };
        });
    }
    return {
        Execute
    };
}
