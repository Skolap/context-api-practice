import AuthContext from "../context/auth-context"

function Login(props) {
    return (<AuthContext.Consumer>
        {(ctx) => {
            return (
                <>{ ctx.isLoggedIn? <div>User is Logged in</div>: <div>User is not Logged in</div>}
                { ctx.isLoggedin ? <button onClick={ctx.onButtonClick}>Logout</button> : <button onClick={ctx.onButtonClick}>Login</button> }</>
                )}}

    </AuthContext.Consumer>)



}

export default Login