import UserModel from '../../models/User';
import buildUserResponse from '../../utils/BuildUserResponse';

export default function SignUpUserUsecase(user) {
    async function Execute() {
        const userModel = new UserModel({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            address: user.address,
            school: user.school,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin
        });
        // eslint-disable-next-line no-return-await
        return await userModel.save().then((newUser) => {
            return buildUserResponse(newUser);
        }, (error) => {
            return error;
        });
    }
    return {
        Execute
    };
}
