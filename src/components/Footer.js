export default function Footer() {

    const year = new Date().getFullYear();

  //  const full =  `Abdulafeez &copy; ${String(year)} `;
  
    return (
        <footer className="text-center py-3 bg-secondary text-white">
           <p className="lead">&copy; {`Abdulafeez ${String(year)} `} </p>
        </footer>
    )
}