const ErrorMessage = () => {
     let foodItems = ["Dal","Salad","Ghee","Milk", "Curd"]

     return <>
           {foodItems.length === 0 && <h3>I am still hungry</h3>}
     </>
}

export default ErrorMessage