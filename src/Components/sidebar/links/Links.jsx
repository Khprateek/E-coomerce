

const Links = () => {

  const items =[
    "Home",
    "Products",
    "Services",
    "Portfolio",
    "Contacts",
  ];


  return (
    <div className="links">
      {items.map(item=>(
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </div>
  )
}

export default Links
