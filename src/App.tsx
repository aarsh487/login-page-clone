import imgUrl from './assets/images/file.png';
import { GiCombinationLock } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";



function App() {

  interface Props {
    type: string;
    placeholder: string;
    value: string;
  }


  const InputElement = (props: Props) => {
    return (
    <>
      <span className='mr-56'>{props.value}</span>
      <input
        className='w-80 h-12 rounded-md bg-slate-100 shadow-md p-4'
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
    )
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="w-11/12 max-w-screen-xl rounded-2xl shadow-xl flex justify-between">
        <div className='w-1/2 bg-purple rounded-xl'>
          <div className=''>
            <img src={imgUrl} className='mx-24 size-9/12' />
          </div>
          <div className='text-center'>
            <h2 className='text-white font-bold text-2xl mb-1'>Connect with the application</h2>
            <p className='text-white mb-12'>Everything you need in an easy customization dashboard</p>
          </div>
          <div className='flex justify-center items-center gap-x-3 mb-8'>
            <div className='w-2 h-2 bg-white rounded-2xl block'></div>
            <div className='w-2 h-2 bg-white rounded-2xl block'></div>
            <div className='w-2 h-2 bg-white rounded-2xl block'></div>
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-6'>
          <div className='flex items-center ml-8 mt-8'>
            <GiCombinationLock size={25} className='text-purple'/>
            <span className='text-lg font-semibold'>Fortis</span>
          </div>
          <div className='text-center -space-x-12 mr-32'>
            <h2 className='font-bold text-3xl'>Welcome back</h2>
            <p className='text-sm opacity-50 mt-2'>Please enter your details</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <InputElement value={'Email address'} type={'email'} placeholder={'Your@example.com'} />
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <InputElement value={'Password'} type={'password'} placeholder={'Password'} />
          </div>
          <div className='flex justify-center'>
            <input type='checkbox' />
            <label className='ml-2'>Remember me</label>
            <span className='ml-16 underline text-blue-800'>Forgot password</span>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <button className='w-80 h-12 bg-purple text-white'>Sign in</button>
            <button className='w-80 h-12 shadow-md'>
              <FcGoogle size={20} className='mt-1 mx-16 absolute' />
              Sign in with Google
            </button>
          </div>
          <div className='flex justify-center'>
            <span className='text-sm opacity-65'>Don't have an account?</span>
            <span className='underline text-blue-800 text-sm ml-2'>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
