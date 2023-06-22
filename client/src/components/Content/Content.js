import ContentItem from './ContentItem'
import style from './style.module.css'
import { useGetCourseQuery } from '../../service/course'
import { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination'
import { Button, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Content() {
    const { data, error, isLoading } = useGetCourseQuery()
    console.log(data);
    const [information, setContries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [informationPerPage] = useState(6)
    const [value, setValue] = useState('')
    useEffect(() => {


        const getCountries = () => {
            const storage = data ||[]
            setContries(storage)
        }

        getCountries()
    }, [])



    const lastIndex = currentPage * informationPerPage
    const firstIndex = lastIndex - informationPerPage
    const currentInfo = information.slice(firstIndex, lastIndex)

    const [valueName, setValueName] = useState('')
    const filteredTask = currentInfo.filter(el => el.nameCourse.toLowerCase().includes(valueName))



    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <>
            <Input
                className={style.inputSearch}
                icon={<IconSearch size="xs" />}
                placeholder="Введите название курса"
                radius="md"
                onChange={(event) => setValue(event.target.value)}
                rightSection={
                    <Button
                        radius="md" size="xs"
                        className={style.btnSearch}
                        onClick={() => setValueName(value)}>Поиск</Button>
                }
            />
            <div className={style.box}>
                {filteredTask.map(el => <ContentItem nameCourse={el.nameCourse} description={el.description} city={el.city} />)}
            </div>

            <Pagination
                informationPerPage={informationPerPage}
                total={information.length}
                paginate={paginate}

            >

            </Pagination >

        </>

    )
}

export default Content