import style from '../assets/css/pages/Page.module.css'

const Page = () => {
  document.title = 'Parzival Dashboard - Page'

  const PageHTML = (<>
    <div className={`${style.pageContainer}`}>
      <h1>Page</h1>
    </div>
  </>)
  
  return PageHTML
}

export default Page