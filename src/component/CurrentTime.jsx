import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => { setTime(new Date()) }, 1000)
        return () => {
            clearInterval(intervalId);
        }
    }, []);
    return <p class="font-monospace lead">This is the curent time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
}
export default CurrentTime;