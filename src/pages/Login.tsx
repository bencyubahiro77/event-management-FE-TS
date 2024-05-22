import MyButton from "@/MyComponent/Button"
import MyInput from "@/MyComponent/Input"
import MyLabel from "@/MyComponent/Label"
import { Link } from "react-router-dom"

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="drop-shadow-lg ">
        <form className="box bg-white rounded-lg md:rounded-none p-4">
          <div className="text-bold mx-10 my-12 max-w-xl w-72">
            <h3 className="font-bold mb-4 text-customGray text-2xl text-center">
                  Welcome Back,
                  <br className="md:hidden" /> Log in
            </h3>
            <div className="grid pb-4 pt-4">
              <MyLabel value="Email" />
              <MyInput width="100%" />
            </div>
            <div className="grid">
              <MyLabel value="Password" />
              <MyInput width="100%" />
            </div>
            <Link to=""><p className="pt-2">Forgot password?</p></Link>
            <MyButton
              value="Login"
              color="blue"
              width="100%"
              navigate={() => console.log('Button clicked!')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
