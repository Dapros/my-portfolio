export default function Error({children} : {children :  React.ReactNode}) {
  return (
    <p className="my-1 text-center border border-red-400 text-red-400 rounded-lg font-bold py-1 px-2 text-sm hover:bg-red-200">
      {children}
    </p>
  )
}
