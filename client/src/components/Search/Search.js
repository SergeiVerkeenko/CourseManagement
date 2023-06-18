import { Button, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './style.module.css'

function Search() {
    return (
        <>
            <Input
                className={style.inputSearch}
                icon={<IconSearch size="xs" />}
                placeholder="Введите название курса"
                radius="md"
                rightSection={
                    <Button
                        radius="md" size="xs"
                        className={style.btnSearch}>Поиск</Button>
                }
            />
        </>
    )
}

export default Search