
export default function AlertMessage({children} : {children: React.ReactNode}) {
  return (
    <>
        <p className="alert-paragraph">{children}</p>
    </>
  )
}
