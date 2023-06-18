import style from './style.module.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className={style.wrapper}>
            <h1>CourseRead</h1>
            <nav>
                <p>
                    <Link to='/admin' >Администрирование</Link>
                </p>
                <p>
                    <Link to='/' >Просмотр</Link>
                </p>
            </nav>
        </div>
    )
}

export default Header