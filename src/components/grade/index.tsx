import React from 'react'
// style
import './style.scss'

interface GradeInterface {
    grade: number
}

function index(props: GradeInterface) {

    const setGrade = (element: HTMLElement) => {
        // style
        let others = document.getElementsByClassName('grade-container')
        for (let i = 0; i < others.length; i++) {
            others[i].classList.remove('grade-container_active')
        }

        element.classList.add('grade-container_active')

        // localStorage
        localStorage.setItem("grade", props.grade.toString());
    }

    return (
        <div className='grade-container' onClick={(e) => setGrade(e.target as HTMLElement)}>
            {props.grade}
        </div>
    )
}

export default index