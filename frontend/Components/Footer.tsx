import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <footer className=' flex items-center flex-row space-x-10'>
            <div className=' flex flex-col font-bold '>
                <h1>About</h1>
                <Link href="/">BitsTECH</Link>
                <Link href="/">staff</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Advertise</Link>
                <Link href="/">SiteMap</Link>
            </div>
            <div className=' flex flex-col font-bold'>
                <h1>LEGAL</h1>
                <Link href="/">TERMS OF SERVICE</Link>
                <Link href="/">PRIVACY POLICY</Link>
                <Link href="/">SiteMap</Link>
                <Link href="/">SiteMap</Link>
            </div>
            <div className=' flex flex-col font-bold'>
                <h1>Trending Tech topics</h1>
                <Link href="/">ChatGpt</Link>
            </div>
        </footer>
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
    <span>© 2023 Copyright:</span>
    <Link
      className="font-semibold text-neutral-600 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Rasheed Olaleye</Link    >
  </div>
        </>
    );
}

export default Footer;