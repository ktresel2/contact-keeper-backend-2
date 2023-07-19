import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'

const Login = props => {
    let navigate = useNavigate()
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const {setAlert} = alertContext
    const {login, error, clearErrors, isAuthenticated} = authContext

    useEffect(() => {
        if (isAuthenticated) {
            return navigate('/')
        }
        if(error === 'Invalid Credentials' ) {
            setAlert(error, 'danger')
            clearErrors()
        }
        //es-lint-disble-next-line
     }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        email: '',
        password: "",
    })

    const {email, password} = user

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if (email === "" || password === "") {
            setAlert('Please fill in all fields', 'danger')
        } else {
            login({
                email,
                password
            })
        }
    }

  return (
    <div className='form-container'>
        <h1>
            Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={password} onChange={onChange} />
            </div>
            <input type="submit" value="Login" className='btn btn-primary btn-block' />
        </form>
    </div>
  )
}

export default Login