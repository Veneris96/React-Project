import { useState, useEffect } from "react";

const useFetch = (endpoint) => { /* passiamo sempre endpoint */

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState('')

    const handleFetch = async () => {
        try {
            const data = await fetch(endpoint, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODMzMTI2NjAsImV4cCI6MTY4NDUyMjI2MH0.72_8Ghdn3dYZ-2Rx5Fk5pLumoX8KP1pvriQjB-RrU04"
                },
            })
            const response = await data.json()
            setData(response)
            setLoading(false)
        } catch (error) {
            if (error) setError('Erorre')
        }
    }

    useEffect(() => {
        handleFetch()
    }, [endpoint])

    return {
        data, loading, error
    }
}

export default useFetch