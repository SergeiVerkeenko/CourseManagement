import style from './style.module.css'
import { useCreateCourseMutation } from '../../service/course';
import { Input, Button } from '@mantine/core';
import { useState } from 'react';
function CreateOperation() {
    const [createCourse] = useCreateCourseMutation()
    const [value, setValue] = useState({ nameCourse: "", description: "", city: "" })
    function sendRequest() {
        createCourse(value)
    }
    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    return (
        <div className={style.wrapper}>
            <h1>Имя курса</h1>
            <Input name='nameCourse' placeholder="nameCourse" onChange={changeInputValue}></Input>
            <h1>Описание</h1>
            <Input name='description' placeholder="description" onChange={changeInputValue}></Input>
            <h1>Город</h1>
            <Input name='city' placeholder="city" onChange={changeInputValue}></Input>
            <Button onClick={sendRequest}>BUTTON</Button>
        </div>
    )
}

export default CreateOperation