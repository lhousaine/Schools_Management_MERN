import SchoolController from '../controllers/SchoolController';

const express = require('express');

export default function SchoolRouter() {

    const router = express.Router();

    const schoolController = SchoolController();

    router.route('/:schoolName')
        .get(schoolController.getSchoolByName);

    router.route('/')
        .get(schoolController.getAllSchools);

    router.route('/')
        .post(schoolController.addNewSchool);

    return router;
}
