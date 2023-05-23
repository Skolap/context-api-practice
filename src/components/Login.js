function Login(props){
    return <div>
    {props.isLoggedin? <div>User is Logged in</div>:<div>User is Not Logged in</div>}
    {props.isLoggedin? <button onClick={props.onButtonClick}>Logout</button>:<button onClick={props.onButtonClick}>Login</button>}
    </div>
}

export default Login