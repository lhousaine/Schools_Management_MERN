import SchoolModel from "../../models/School";
import buildSchoolResponse from "../../utils/BuildSchoolResponse";

export default function getSchoolByUsecase(schoolName) {
    async function Execute() {
        await SchoolModel.findById({ name: schoolName }).then((school) => {
            return buildSchoolResponse(school);
        }).catch((error) => {
            return { message: 'No School Named By ' + schoolName }
        });
    }
    return {
        Execute
    };
}