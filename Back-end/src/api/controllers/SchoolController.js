import addNewSchoolUsecase from "../usecases/schools/addNewSchool";
import getAllSchoolsUsecase from "../usecases/schools/getAllSchools";
import getSchoolByNameUsecase from "../usecases/schools/getSchoolByName";

export default function SchoolController() {

    const getAllSchools = (request, response, next) => {
        const getAllSchools = getAllSchoolsUsecase();
        getAllSchools.Execute().then((schools) => {
            response.status(200).json(schools);
        }, (error) => {
            next(error);
        });
    };

    const addNewSchool = (request, response, next) => {
        const newSchoolData=request.body;
        const addNewSchool = addNewSchoolUsecase(newSchoolData);
        addNewSchool.Execute().then((newSchool) => {
            response.status(200).json(newSchool);
        }, (error) => {
            response.status(500).json(
                {error:error}
            );
        });
    };

    const getSchoolByName = (request, response, next) => {
        const schoolName=request.params.schoolName;
        const getSchoolByName = getSchoolByNameUsecase(schoolName);
        getSchoolByName.Execute().then((school) => {
            response.status(200).json(school);
        }, (error) => {
            response.status(500).json(
                {error:error}
            );
        });
    };

    return {
        getAllSchools,
        addNewSchool,
        getSchoolByName
    };
}