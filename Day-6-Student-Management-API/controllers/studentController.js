let students = [
  { id: 1, name: "Sushant", course: "M.Sc CS" },
  { id: 2, name: "Rahul", course: "BCA" }
];


const getAllStudents=(req,res)=>{
    res.status(200).json(students)
};

const getStudentById = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
};

const createStudent = (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
};

// for update student
const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    student.name = name;
    student.course = course;

    res.status(200).json(student);
};

// delete student bu id 
const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
};



module.exports={
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};