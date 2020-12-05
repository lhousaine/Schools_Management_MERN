import UserModel from "../../models/User";

export default function SignInUserUsecase(signinData) {
    async function Execute() {
        await UserModel.findOne({
            email: signinData.email,
            password: signinData.password
        }).then(signinUser =>{
            return {
                _id: signinUser.id,
                firstName: signinUser.firstName,
                lastName: signinUser.lastName,
                email: signinUser.email,
                address: signinUser.address,
                school: signinUser.school,
                isAdmin: signinUser.isAdmin,
                token: getToken(signinUser)
            }
        }
        ).catch((error)=>{
            return error;
        });
    }
    return {
        Execute
    };
}
