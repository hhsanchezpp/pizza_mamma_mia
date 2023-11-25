import "./Header.css"
export const Header = () => {
  return (
    <div className='header text-center h-80 flex flex-col justify-center items-center text-white'>
        <h1 
          className="text-6xl font-bold">¡Pizzería Mamma Mia!
        </h1>
        <p className="text-xl mt-4">
          Tenemos las mejores pizzas que podrás encontrar!
        </p>
    </div>
  )
}