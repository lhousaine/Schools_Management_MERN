import getAllUsersUsecase from '../usecases/users/getAllUsers';
import SignInUserUsecase from '../usecases/users/signInUser';
import SignUpUserUsecase from '../usecases/users/signUpUser';

export default function UserController() {

    const getAllUsers = async (request, response, next) => {
        const allUsers = getAllUsersUsecase();
        await allUsers.Execute().then((users) => {
            response.status(200).json(users);
        }, (error) => {
            response.status(500).json(
                { error }
            );
        });
    };

    const SignInUser = async (request, response, next) => {
        const signinData = request.body;
        console.log('try sign in');
        const signinUser = SignInUserUsecase(signinData);
        await signinUser.Execute().then((signin) => {
            response.status(200).json(signin);
        }, (error) => {
            response.status(500).json(
                { error }
            );
        });
    };

    const SignUpUser = async (request, response, next) => {
        const newUserData = request.body;
        const signupUser = SignUpUserUsecase(newUserData);
        await signupUser.Execute().then((newUser) => {
            response.status(201).json(newUser);
        }, (error) => {
            response.status(500).json(
                { error }
            );
        });
    };

    return {
        getAllUsers,
        SignInUser,
        SignUpUser,
    };
}
