import style from './style.module.css'
import { useGetCourseByIdQuery, useGetCourseQuery, useUpdateCourseMutation } from '../../service/course';
import { Input, Button } from '@mantine/core';
import { Select } from '@mantine/core';
import { useState } from 'react';
function UpdateOperation() {
    const { data: dataCourse } = useGetCourseQuery()
    const [updateCourse] = useUpdateCourseMutation()
    const [value, setValue] = useState({ id: "", nameCourse: "", description: "", city: "" })
    const { data: foundCourse } = useGetCourseByIdQuery(value?.id)
    console.log(value);
    function changeValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    function sendRequest() {
        updateCourse(value)
        window.location.reload()
    }

    console.log(foundCourse);
    return (
        <div className={style.wrapper}>
            <div className={style.update2} >
                <Select

                    label="ДО"
                    placeholder="Pick one"
                    onChange={(event) => setValue({ ...value, id: event })}
                    data={dataCourse?.map((el) => el.id) ?? []}
                />
                {foundCourse ?
                    <div className={style.update}>
                        <Input value={foundCourse?.nameCourse} disabled></Input>
                        <Input value={foundCourse?.description} disabled></Input>
                        <Input value={foundCourse?.city} disabled></Input>

                    </div> : null
                }
            </div>

            <div>
                <h1>Имя курса</h1>
                <Input name='nameCourse' placeholder="nameCourse" onChange={changeValue}></Input>
                <h1>Описание</h1>
                <Input name='description' placeholder="description" onChange={changeValue} ></Input>
                <h1>Город</h1>
                <Input name='city' placeholder="city" onChange={changeValue} ></Input>
                <Button onClick={sendRequest}>Обновить</Button>
            </div>



        </div>
    )

}

export default UpdateOperation


