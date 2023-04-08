const Employee = require('../model/Employee');
const asyncHandler = require('express-async-handler');

// @desc Get users
// @route GET /empoyee
// @access Private
const getAEmployee = asyncHandler(async (req, res) => {
    const { first_name, aadhar_number, pan_number } = req.body;
    var getUser;

    if(first_name) {
        getUser = await Employee.find({ first_name }).lean().exec();
    } else if(aadhar_number) {
        getUser = await Employee.find({ aadhar_number }).lean().exec();
    } else {
        getUser = await Employee.find({ pan_number }).lean().exec();
    }

    // if(!getUser?.length) {
    //     return res.status(400).json({ message: 'No users found'} )
    // }

    res.json(getUser);
})



// @desc Post a new employee
// @route POST /empoyee
// @access Private
const createNewEmployee = asyncHandler(async (req, res) => {
    const { first_name, last_name, phone_number, current_address, resume = '', aadhar_number, pan_number, flags } = req.body;

    if(![first_name, last_name, phone_number, aadhar_number, pan_number].every(Boolean)) {
        return res.status(400).json({ message: "All correct feilds required" })
    }

    const getDuplicateEmployee = await Employee.find({ aadhar_number }).lean().exec();
    if(getDuplicateEmployee?.length) {
        return res.status(409).json({ message: 'Duplicate eomployee found' });
    }

    const newEmployeeObject = { first_name, last_name, phone_number, current_address, resume , aadhar_number, pan_number, flags };

    const addedEmployee = await Employee.create(newEmployeeObject)

    if(addedEmployee) {
        res.status(200).json({ message: `${first_name} added to databse` })
    } else {
        res.status(400).json({ message: "Invalid data recoreded." })
    }
})



// @desc patching a employee
// @route PATCH /employee
// @access Private
const updateEmployee = asyncHandler(async (req, res) => {
    const { _id, flags } = req.body;

    if(!_id) {
        return res.status(400).json({ message: "Enter all information" })
    }

    const employeeToUpdate = await Employee.findOne({ _id }).exec();
    if(!employeeToUpdate) {
        return res.status(400).json({ message: "No such employee found" });
    }

    employeeToUpdate.flags = flags;

    const updatedEmployee = await employeeToUpdate.save();

    res.json({ message: `Employee ${updatedEmployee.first_name} updated` });
})



// @desc Deleting a note
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    // const { username, title } = req.body;

    // if(!username || !title) {
    //     return res.status(400).json({ message: "Username & note title required" })
    // }

    // const userID = await User.findOne({ username }, { _id: true }).lean().exec();
    // if(!userID) {
    //     return res.status(400).json({ message: "No such user found" });
    // }

    // const noteToDelete = await Note.findOne({ user: userID, title }).exec();
    // if(!noteToDelete) {
    //     return res.status(400).json({ message: "User has no such note" });
    // }

    // const deletedNote = await noteToDelete.deleteOne();

    // res.json({ message: `${username}'s note ${deletedNote.title} deleted` });
})


module.exports = { getAEmployee, createNewEmployee, updateEmployee }