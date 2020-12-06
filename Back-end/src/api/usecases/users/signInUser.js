import UserModel from '../../models/User';

export default function SignInUserUsecase(signinData) {
    async function Execute() {
        // eslint-disable-next-line no-return-await
        return await UserModel.findOne({
            email: signinData.email,
            password: signinData.password
        }).then((signinUser) => {
            return {
                firstName: signinUser.firstName,
                lastName: signinUser.lastName,
                email: signinUser.email,
                age: signinUser.age,
                school: signinUser.school,
                isAdmin: signinUser.isAdmin,
                // token: getToken(signinUser)
            };
        }, (error) => {
            return error;
        });
    }
    return {
        Execute
    };
}
