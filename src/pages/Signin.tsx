import React, { useEffect, useState } from "react";
import Field from "../components/Field";

export default function Signin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e:any)=>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e:any)=>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        // validation

        console.log(username, password)
    }

    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <form>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                <div className="space-y-4">
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Welcome Back!!!</h1>
                    <Field id="1" label="Username" type="text" handleChangeCB={handleUsernameChange} value={username} />
                    <Field id="2" label="Password" type="password" handleChangeCB={handlePasswordChange} value={password} />
                    
                </div>
                <button onClick={handleSubmit} type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">SignIn</button>
                </div>
            </form>
        </div>
    );
}