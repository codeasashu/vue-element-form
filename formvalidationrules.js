export default {
    validationrules: {
        applicantform: {
            applicant:{
                name:{
                    first: [
                        {required: true, message: 'Please input first name', trigger: 'blur' },
                    ],
                    middle: [
                        {required: true, message: 'Please input phone', trigger: 'blur' },
                    ],
                    last: [
                        {required: true, message: 'Please input phone', trigger: 'blur' },
                    ]
                },
                homephone: [
                    {required: true, message: 'Please input phone', trigger: 'blur' },
                ],
                fax:[
                    {required: true, message: 'Please input phone', trigger: 'blur' },
                ]
            }
        }
    },
}