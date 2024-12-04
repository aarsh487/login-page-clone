import imgUrl from './assets/images/file.png';
function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="w-11/12 max-w-screen-xl rounded-2xl shadow-xl flex justify-between">
        <div className='w-1/2 bg-purple-800 rounded-xl'>
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
        <div className='w-1/2'>Login</div>
      </div>
    </div>
  )
}

export default App
