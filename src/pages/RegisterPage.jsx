import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className="grow flex items-center justify-around">
      <div className="mb-16">
        <div className="text-4xl mb-4 text-center">Register</div>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="bg-primary w-full py-2 px-4 rounded-2xl text-white">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            {'Already a member? '}
            <Link to={'/login'} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
