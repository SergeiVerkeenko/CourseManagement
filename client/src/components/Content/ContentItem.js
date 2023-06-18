import style from './style.module.css'

function ContentItem({ nameCourse, description, city }) {
    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <h2>{nameCourse}</h2>
                <p className={style.opisanie}>{description}</p>
                <div className={style.block}>
                    <div className={style.img}></div>
                    <p >{city}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentItem