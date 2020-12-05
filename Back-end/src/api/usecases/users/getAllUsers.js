import UserModel from "../../models/User";
import buildUserResponse from "../../utils/BuildUserResponse";

export default function getAllUsersUsecase() {
    async function Execute() {
        UserModel.find({}, (error, users) => {
            if (users.length > 0 && users) {
                const result = {
                    users : users.map((user) => {
                        return buildUserResponse(user);
                    })
                }
                return result;
            } else {
                return { message: "No user found" };
            }
        }).catch((error) => {
            console.log(error);
            return {
                error: error
            };
        });
    }
    return {
        Execute
    };
}
