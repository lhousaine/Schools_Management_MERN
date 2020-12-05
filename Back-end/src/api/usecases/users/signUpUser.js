import UserModel from "../../models/User";

export default function SignUpUserUsecase(user) {
    async function Execute() {
        const newUser=new UserModel({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            address: user.address,
            school: user.school,
            email: user.email,
            password: user.password,
            isAdmin: false
        });

        await newUser.save((error, user) => {
            if (error) {
                return error;
            }
            return user;
        });
    }
    return {
        Execute
    };
}
