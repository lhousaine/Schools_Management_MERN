import SchoolModel from "../../models/School";
import buildSchoolResponse from "../../utils/BuildSchoolResponse";

export default function getAllSchoolsUsecase() {

    async function Execute() {
        await SchoolModel.find({}, (error, schools) => {
            if (schools.length > 0 && schools) {
                const result = {
                    schools : schools.map((school) => {
                        return buildSchoolResponse(school);
                    })
                }
                return result;
            } else {
                return { message: "No school found" };
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
