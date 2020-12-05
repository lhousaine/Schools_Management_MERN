import SchoolModel from "../../models/School";
import buildSchoolResponse from "../../utils/BuildSchoolResponse";

export default function getSchoolByNameUsecase(schoolName) {
    async function Execute() {
        await SchoolModel.findById({ name: schoolName }).then((school) => {
            return buildSchoolResponse(school);
        }).catch((error) => {
            return error;
        });
    }
    return {
        Execute
    };
}