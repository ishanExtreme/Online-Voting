import React, { useState } from "react";
import DropDownField from "../components/DropDownField";
import Field from "../components/Field";
import TextAreaField from "../components/TextAreaField";
import {electionTypes} from "../types/election"

const electionChoices:electionTypes[] = ["Vice President", "Technical Lead", "Cultural Lead", "Treasurer"]

export default function PartyRegister() {

    // Party Name
    const [partyName, setPartyName] = useState("")
    // Election name
    const [election, setElection] = useState<electionTypes>("")
    // Leader Name
    const [name, setName] = useState("")
    // Leader Adhaar card
    const [adhaar, setAdhaar] = useState("")
    // username
    const [userName, setUsername] = useState("")
    // password
    const [password, setPassword] = useState("")
    // password2 
    const [password2, setPaswword2] = useState("")

    const handlePartyNameChange = (e:any)=>{
        setPartyName(e.target.value)
    }

    const handleElectionChange = (option:electionTypes)=>{
        setElection(option)
    }

    const handleNameChange = (e:any)=>{
        setName(e.target.value)
    }

    const handleAdhaarChange = (e:any)=>{
        setAdhaar(e.target.value)
    }

    const handleUserNameChange = (e:any)=>{
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e:any)=>{
        setPassword(e.target.value)
    }

    const handlePassword2Change = (e:any)=>{
        setPaswword2(e.target.value)
    }

    const handleSubmit =  (e:any)=> {
        e.preventDefault()

        console.log(partyName, election, name, adhaar, password, password2, )
    }



    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <form>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                <div className="space-y-4">
                    <h1 className="text-center text-2xl font-semibold text-gray-600">Register You Party</h1>
                    <Field id="1" label="Party Name" type="text" handleChangeCB={handlePartyNameChange} value={partyName} />
                    <div className="flex justify-center">
                    <DropDownField id={2} label="Election Type" options={electionChoices} handleSelectCB={handleElectionChange} />
                    </div>
                    <Field id="3" label="Full Name" type="text" handleChangeCB={handleNameChange} value={name} />
                    <Field id="4" label="Adhaar Number" type="text" handleChangeCB={handleAdhaarChange} value={adhaar} />
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