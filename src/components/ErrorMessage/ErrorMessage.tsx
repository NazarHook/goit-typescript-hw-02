import css from './ErrorMessage.module.css'
export default function ErrorMessage() {
    return(
        <b className={css.message}>Sorry there is a problem, please reload</b>
    )
}