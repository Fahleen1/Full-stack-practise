import { useEffect, useState } from "react"

function useFetch(url: any) {
    const [data, setData] = useState(null)
    console.log(data)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))

    }, [url])

    return { data }
}

export default useFetch
