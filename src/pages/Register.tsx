import React, { useState } from "react";
import Field from "../components/Field";
import TextAreaField from "../components/TextAreaField";

export default function Register() {

    // Full Name
    const [fullName, setFullName] = useState("")
    // Adhaar Number
    const [adhaar, setAdhaar] = useState("")
    // Date of Birth
    const [dob, setDob] = useState("")
    // Address
    const [addres, setAddress] = useState("")
    // username
    const [userName, setUsername] = useState("")
    // password
    const [password, setPassword] = useState("")
    // retype-password
    const [password2, setPasword2] = useState("")
    // gender
    const [gender, setGender] = useState("")

    const handleFullNameChange = (e:any)=>{
        setFullName(e.target.value)
    }

    const handleAdhaarChange = (e:any)=>{
        setAdhaar(e.target.value)
    }

    const handleDobChange = (e:any)=>{
        setDob(e.target.value)
    }

    const handleAddressChange = (e:any)=>{
        setAddress(e.target.value)
    }

    const handleUserNameChange = (e:any)=>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e:any)=>{
        setPassword(e.target.value)
    }

    const handlePassword2Change = (e:any)=>{
        setPasword2(e.target.value)
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()

        console.log(fullName,adhaar,addres,userName,password,password2,dob)
    }


    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <form>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                <div className="space-y-4">
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
                    <Field id="1" label="Full Name" type="text" handleChangeCB={handleFullNameChange} value={fullName} />
                    <Field id="2" label="Adhaar Number" type="text" handleChangeCB={handleAdhaarChange} value={adhaar} />
                    <Field id="3" label="Date Of Birth" type="date" handleChangeCB={handleDobChange} value={dob} />
                    <TextAreaField id="4" label="Address" handleChangeCB={handleAddressChange} value={addres} />
                    <Field id="4" label="Username" type="text" handleChangeCB={handleUserNameChange} value={userName} />
                    <Field id="5" label="Password" type="password" handleChangeCB={handlePasswordChange} value={password} />
                    <Field id="6" label="Confirm Password" type="password" handleChangeCB={handlePassword2Change} value={password2} />

                </div>
                <button onClick={handleSubmit} type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
                </div>
            </form>
        </div>
    );
} 