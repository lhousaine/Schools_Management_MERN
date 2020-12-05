import SignInUserUsecase from "../usecases/users/signInUser";
import SignUpUserUsecase from "../usecases/users/signUpUser";

export default function UserController() {

    const getAllUsers = (request, response, next) => {
        const getAllUsers = getAllUsersUsecase();
        getAllUsers.Execute().then((users) => {
            response.status(200).json(users);
        }, (error) => {
            next(error);
        });
    };

    const SignInUser = (request, response, next) => {
        const signinData=request.body;
        const signinUser = SignInUserUsecase(signinData);
        signinUser.Execute().then((signin) => {
            response.status(200).json(signin);
        }, (error) => {
            next(error);
        });
    };

    const SignUpUser = (request, response, next) => {
        const newUserData=request.body;
        const signupUser = SignUpUserUsecase(newUserData);
        signupUser.Execute().then((newUser) => {
            response.status(200).json(newUser);
        }, (error) => {
            next(error);
        });
    };

    return {
        getAllUsers,
        SignInUser,
        SignUpUser,
    };
}