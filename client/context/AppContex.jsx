
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState('')

    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/all')
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)

        }
    }

    // Use interceptor for more robust token handling
    useEffect(() => {
        const authInterceptor = axios.interceptors.request.use(
            (config) => {
                const storedToken = localStorage.getItem('token');
                if (storedToken) {
                    config.headers.Authorization = storedToken;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(authInterceptor);
        };
    }, []);

    useEffect(() => {
        fetchBlogs()
        const storedToken = localStorage.getItem('token')
        if (storedToken) {
            setToken(storedToken)
        }

    }, [])


    const value = { axios, navigate, token, setToken, blogs, setBlogs, input, setInput }
    return (


        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}