import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'

const Register = props => {
    let navigate = useNavigate()
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const {setAlert} = alertContext
    const {register, error, clearErrors, isAuthenticated} = authContext

    useEffect(() => {
        if (isAuthenticated) {
            return navigate('/')
        }
        if(error === 'User already exists' ) {
            setAlert(error, 'danger')
            clearErrors()
        }
        //es-lint-disble-next-line
     }, [error, isAuthenticated])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = user

    const onChange = e => setUser({...user, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()
        if(name === '' || email === '' || password === '') {
            setAlert('Please enter all required fields', 'danger')
        } else if (password !== password2) {
            setAlert('Passwords must match', 'danger')
        } else {
            register({
                name,
                email,
                password
            })
        }
        
    }

  return (
    <div className='form-container'>
        <h1>
            Account <span className='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={password} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="text" name="password2" value={password2} onChange={onChange} />
            </div>
            <input type="submit" value="Register" className='btn btn-primary btn-block' />
        </form>
    </div>
  )
}

export default Register