import style from './style.module.css'
import { useDeleteCourseMutation, useGetCourseByIdQuery, useGetCourseQuery, useUpdateCourseMutation } from '../../service/course';
import { Button, Input } from '@mantine/core';
import { Select } from '@mantine/core';
import React, { useState } from 'react';
function DeleteOperation() {
    const [deleteCourse] = useDeleteCourseMutation()
    const [value, setValue] = useState({ id: "", nameCourse: "", description: "", city: "" })
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)
    const { data: dataCourse } = useGetCourseQuery()
    // console.log(value);
    console.log(foundCourse);
    function changeValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    function sendRequest() {
        deleteCourse(value)
        window.location.reload()
    }
    return (
        <>


            <div className={style.wrapper}>
                <div className={style.update2} >
                    <Select

                        label="ДО"
                        placeholder="Pick one"
                        onChange={(event) => setValue({ ...value, id: event })}
                        data={dataCourse?.map((el) => el.id) ?? []}
                    />
                </div>

                <div>
                    <h1>Имя курса</h1>
                    <Input name='nameCourse' value={foundCourse?.nameCourse} placeholder="nameCourse" onChange={changeValue}></Input>
                    <h1>Описание</h1>
                    <Input name='description' value={foundCourse?.description} placeholder="description" onChange={changeValue} ></Input>
                    <h1>Город</h1>
                    <Input name='city' value={foundCourse?.city} placeholder="city" onChange={changeValue} ></Input>
                    <Button onClick={sendRequest}>Удалить</Button>
                </div>

            </div>
        </>
    )
}

export default DeleteOperation
