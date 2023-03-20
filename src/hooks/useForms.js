import { useState } from "react"

export const useForms = (initialForms = {}) => {

    const [forms, setForms] = useState(initialForms)

    const handleChange = ({target}) => {
        const {name, value} = target

        setForms({
            ...forms,
            [name]: value
        })
    }

    const resetForms = () => {
        setForms(
            initialForms
        )
    }

    return {
        ...forms,
        handleChange,
        resetForms
    }
}