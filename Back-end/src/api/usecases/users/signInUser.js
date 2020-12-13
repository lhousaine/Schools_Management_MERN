import bcrypt from 'bcrypt';
import UserModel from '../../models/User';
import createToken from '../../utils/auth/generate.token';

export default function SignInUserUsecase(signinData) {
    async function Execute() {
        // eslint-disable-next-line no-return-await
        return UserModel.findOne({
            email: signinData.email
        }).then(async (signinUser) => {
            if (bcrypt.compareSync(signinData.password, signinUser.password)) {
                return {
                    token: createToken(signinUser)
                };
            }
            return {
                error: 'Incorrect user Data'
            };
        }, (error) => {
            return {
                error: 'failled to authenticate'
            };
        });
    }
    return {
        Execute
    };
}
