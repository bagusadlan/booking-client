import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="grow flex items-center justify-around">
      <div className="mb-16">
        <div className="text-4xl mb-4 text-center">Login</div>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="bg-primary w-full py-2 px-4 rounded-2xl text-white">
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            {"Don't have an account yet? "}
            <Link to={'/register'} className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}